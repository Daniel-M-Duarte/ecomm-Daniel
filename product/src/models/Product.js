import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    id: { type: String },
    produto: {
      type: String,
      required: true,
      match: /^[a-zA-Z][a-zA-Z0-9]*/gm,
      minlength: 3,
    },
    descricao: { type: String, required: true },
    slug: {
      type: String,
      required: true,
      match: /[a-zA-Z0-9]*/gm,
    },
    precoUnitario: {
      type: Number,
      required: true,
      min: 1,
    },
    qtd_estoque: {
      type: Number,
      required: true,
      min: 0,
      max: 10000,
    },
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: true },
  },
);

const products = mongoose.model('products', productSchema);

export default products;
