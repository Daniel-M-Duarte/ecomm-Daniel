import express from 'express';
import CategoryController from '../controllers/categoriesControlle.js';

const router = express.Router();

router
  .get("/api/categories", CategoryController.listarCategorias)
  .patch("/api/admin/categories/:id", CategoryController.ativaCategoria)
  .get("/api/categories/:id", CategoryController.buscarCategoriabyId)
  .delete("/api/admin/categories/:id", CategoryController.apagaCategoria)   
  .post("/api/admin/categories", CategoryController.addNovaCategoria)  
  .put("/api/admin/categories/:id", CategoryController.atualizaCategoria)  
   

export default router; 

