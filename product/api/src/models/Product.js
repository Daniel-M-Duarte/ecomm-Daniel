import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        id: {type: String},
        produto: {type: String, required: true},
        descricao: {type: String, required: true},
        Slug: {type: String, required: true},        
        precoUnitario: {type: Number, required: true},
        qtd_estoque: {type: Number, required: true},
        categoria: {type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: true},
        // categoria: {type: String, required: true}
    }
);

const products = mongoose.model('products', productSchema);

export default products;