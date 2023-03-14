/* eslint-disable linebreak-style */
const BearerStrategy = require('passport-http-bearer').Strategy;
const passport = require('passport');
const jwt = require('jsonwebtoken');
const searchingAPI = require('../other-APIs/fetchingAPI');

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

module.exports = bearer;
