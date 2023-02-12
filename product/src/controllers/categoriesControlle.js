import categories from '../models/categories.js';

class CategoryController{

    static listarCategorias = (req, res) =>{
        categories.find((err, categories) =>{
          if(err) return res.status(500).json({message: `${err.message}`})
          res.status(200).json(categories)
        })
    }

    static buscarCategoriabyId = (req, res) =>{
      const  id  = req.params.id;
      categories.findById(id, (err, categories) =>{
        if(err) return res.status(404).json({message: `${err.message} - ID não localizado`});
        res.status(200).json(categories);
      })
    }

    static addNovaCategoria = (req, res) =>{
      const categoria = new categories(req.body);

      categoria.save((err) =>{

        if (err) return res.status(500).json({message: `${err.message} - FALHA AO CADASTRAR`});

        res.status(201).json(categoria);

      })
    }

    static atualizaCategoria = (req, res) =>{
      const id = req.params.id;
      categories.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        if(err) return res.status(404).json({message: `${err.message} - ID não localizado`});
        res.status(200).json({message: "Categoria atualizada com sucesso"});
      })
    }

    static apagaCategoria = (req, res) =>{
      const id = req.params.id;      
      categories.findByIdAndDelete(id, (err, categories) =>{
        if(err) return res.status(404).json({message: `${err.message} - ID não localizado`});
        res.status(400).json({message: "Excluido com sucesso"})
      })
    }

    static ativaCategoria = (req, res) =>{
      const id = req.params.id;
      categories.findByIdAndUpdate(id, {$set: {'status': 'ATIVA'}}, (err, categories) =>{
        if(err) return res.status(500).json({message: err.message});
        res.status(201).json({message: 'Categoria atualizada'});
      })
    }


}
export default CategoryController;


