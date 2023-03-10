import express from 'express';
// eslint-disable-next-line import/extensions
import AccountController from '../controllers/accountsControlle.js';

const router = express.Router();

router
  .get('/api/accounts', AccountController.listarContas)
  .get('/api/accounts/:id', AccountController.buscarContabyId)
  .post('/api/admin/accounts', AccountController.inserirConta)
  .delete('/api/admin/accounts/:id', AccountController.deletarConta)
  .put('/api/admin/accounts/:id', AccountController.atualizatConta);

export default router;
