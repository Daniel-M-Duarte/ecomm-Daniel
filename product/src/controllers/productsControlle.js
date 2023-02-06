import products from '../models/Product.js';

class ProductController{

  static listarProdutos = (req, res) =>{
    products.find()
      .populate('categoria')
      .exec((err, products) => {
        res.status(200).json(products)
    })
  }

  static addNovoProduto = (req, res) =>{
    const product = new products(req.body);
    product.save((err) =>{
      if (err) return res.status(500).json({message: `${err.message} - FALHA AO CADASTRAR`});
      res.status(201).json(product);
    })
  }

  static listarProdutosById = (req, res) =>{
    const id = req.params.id;

    products.findById(id)
      .populate('categoria')
      .exec((err, products) => {
        if(err) return res.status(404).send({message: `${err.message} - Id não localizado`})
        res.status(200).json(products)
    })
}

static atualizaProduto = (req, res) =>{
  const id = req.params.id;
  products.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
    if(err) return res.status(404).json({message: `${err.message} - ID não localizado`});
    res.status(202).json({message: "Produto atualizada com sucesso"});
  })
}

static apagaProduto = (req, res) =>{
  const id = req.params.id;      
  products.findByIdAndDelete(id, (err, products) =>{
    if(err) return res.status(404).json({message: `${err.message} - ID não localizado`});
    res.status(400).json({message: "Excluido com sucesso"})
  })
}

}
export default ProductController;