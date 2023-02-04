import express from 'express';
import CategoryController from '../controllers/categoriesControlle.js';

const router = express.Router();

router
  .get("/api/categories", CategoryController.listarCategorias)


export default router; 