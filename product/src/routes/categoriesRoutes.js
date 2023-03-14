import express from 'express';
import CategoryController from '../controllers/categoriesControlle.js';
import bearer from '../authorization/productsMiddlewaresAuthe.js';

const router = express.Router();

router
  .get('/api/categories', CategoryController.listarCategorias)
  .patch('/api/admin/categories/:id', bearer, CategoryController.ativaCategoria)
  .get('/api/categories/:id', CategoryController.buscarCategoriabyId)
  .delete('/api/admin/categories/:id', bearer, CategoryController.apagaCategoria)
  .post('/api/admin/categories', bearer, CategoryController.addNovaCategoria)
  .put('/api/admin/categories/:id', bearer, CategoryController.atualizaCategoria);

export default router;
