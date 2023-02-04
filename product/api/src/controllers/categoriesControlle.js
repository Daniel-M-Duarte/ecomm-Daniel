import categories from '../models/categories.js';

class CategoryController{
    static listarCategorias = (req, res) =>{
        categories.find((err, categories) =>{
          res.status(200).json(categories)
        })
    }
}

export default CategoryController;