/* eslint-disable import/prefer-default-export */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
import passport from 'passport';
import LocalStrategy from 'passport-local';
import users from '../models/Account.js';
import bcrytjs from 'bcryptjs';

function verifyAccount(account) {
  if (!account) {
    throw new Error('Email invalido');
  }
}

async function verifyPassword(senha, hashSenha) {
  const senhaValida = await bcrytjs.compare(senha, hashSenha);
  if (!senhaValida) {
    throw new Error('Senha invalida');
  }
}

passport.use(
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'senha',
    session: false,
  }, async (email, senha, done) => {
    try {
      const account = await users.findOne({ email });
      verifyAccount(account);
      await verifyPassword(senha, account.senha);
      done(null, account);
    } catch (error) {
      done(error);
    }
  }),
);

