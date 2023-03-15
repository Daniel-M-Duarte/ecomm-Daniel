/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/no-extraneous-dependencies
import jwt from 'jsonwebtoken';

// eslint-disable-next-line linebreak-style
export default function createJWT(account) {
  const payload = {
    id: account._id,
  };
  const token = jwt.sign(payload, process.env.CHAVE_JWT, { expiresIn: '1d' });
  return token;
}
