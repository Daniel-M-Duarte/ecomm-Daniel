/* eslint-disable linebreak-style */

import BearerStrategy from 'passport-http-bearer';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import searchingAPI from '../other-APIs/fetchingAPI.js';

const bearer = passport.use(
  new BearerStrategy(
    async (token, done) => {
      try {
        const payload = jwt.verify(token, process.env.CHAVE_JWT);
        const account = await searchingAPI(payload.id);
        done(null, account);
      } catch (error) {
        done(error);
      }
    },
  ),
);

export default bearer;
