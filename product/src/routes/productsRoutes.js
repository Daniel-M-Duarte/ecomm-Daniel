import express from 'express';
import ProductController from '../controllers/productsControlle.js';
import bearer from '../authorization/productsMiddlewaresAuthe.js';

const router = express.Router();

router
  .get('/api/products', ProductController.listarProdutos)
  .get('/api/products/:id', ProductController.listarProdutosById)
  .post('/api/admin/products', bearer, ProductController.addNovoProduto)
  .put('/api/admin/products/:id', bearer, ProductController.atualizaProduto)
  .delete('/api/admin/products/:id', bearer, ProductController.apagaProduto);

export default router;
