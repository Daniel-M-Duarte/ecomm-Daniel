import express from 'express';
import ProductController from '../controllers/productsControlle.js';

const router = express.Router();

router
  .get("/api/products", ProductController.listarProdutos)
  .get("/api/products/:id", ProductController.listarProdutosById)
  .post("/api/admin/products", ProductController.addNovoProduto)
  .put("/api/admin/products/:id", ProductController.atualizaProduto)
  .delete("/api/admin/products/:id", ProductController.apagaProduto)
  
export default router;  