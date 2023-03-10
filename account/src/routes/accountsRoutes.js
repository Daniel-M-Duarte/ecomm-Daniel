import express from 'express';
import passport from 'passport';
import AccountController from '../controllers/accountsControlle.js';

const router = express.Router();

router
  .get('/api/accounts', AccountController.listarContas)
  .get('/api/accounts/:id', AccountController.buscarContabyId)
  .post('/api/admin/accounts', AccountController.inserirConta)
  .post('/api/users/login', passport.authenticate('local', { session: false }), AccountController.login)
  .delete('/api/admin/accounts/:id', AccountController.deletarConta)
  .put('/api/admin/accounts/:id', AccountController.atualizatConta);

export default router;
