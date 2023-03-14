/* eslint-disable linebreak-style */
const passport = require('passport');

const bearer = (req, res, next) => {
  passport.authenticate(
    'bearer',
    { session: false },
    (error, account) => {
      if (error) return res.status(400).json({ message: 'Token inválido!' });
      if (!account) return res.status(401).json({ message: 'Usuário não autenticado!' });
      req.user = account;
      return next();
    },
  )(req, res, next);
};

module.exports = bearer;
