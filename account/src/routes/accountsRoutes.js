import express from 'express';
import passport from 'passport';
import AccountController from '../controllers/accountsControlle.js';

const router = express.Router();

router
  .get('/api/accounts', passport.authenticate('bearer', { session: false }), AccountController.listarContas)
  .get('/api/accounts/:id', AccountController.buscarContabyId)
  .post('/api/admin/accounts', AccountController.inserirConta)
  .post('/api/users/login', passport.authenticate('local', { session: false }), AccountController.login)
  .delete('/api/admin/accounts/:id', passport.authenticate('bearer', { session: false }), AccountController.deletarConta)
  .put('/api/admin/accounts/:id', passport.authenticate('bearer', { session: false }), AccountController.atualizatConta);

export default router;
