/* eslint-disable no-shadow */
import categories from '../models/categories.js';

class CategoryController {
  static listarCategorias = (req, res) => {
    categories.find((err, categories) => res.status(200).json(categories));
  };

  static buscarCategoriabyId = (req, res) => {
    const { id } = req.params;
    categories.findById(id, (err, categories) => {
      if (err) return res.status(404).json({ message: `${err.message} - ID não localizado` });
      return res.status(200).json(categories);
    });
  };

  static addNovaCategoria = (req, res) => {
    // eslint-disable-next-line new-cap
    const categoria = new categories(req.body);

    categoria.save((err) => {
      if (err) return res.status(500).json({ message: `${err.message} - FALHA AO CADASTRAR` });

      return res.status(201).json(categoria);
    });
  };

  static atualizaCategoria = (req, res) => {
    const { id } = req.params;
    categories.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) return res.status(404).json({ message: `${err.message} - ID não localizado` });
      return res.status(200).json({ message: 'Categoria atualizada com sucesso' });
    });
  };

  static apagaCategoria = (req, res) => {
    const { id } = req.params;
    categories.findByIdAndDelete(id, (err) => {
      if (err) return res.status(404).json({ message: `${err.message} - ID não localizado` });
      return res.status(204).send({ message: 'Excluido com sucesso' });
    });
  };

  static ativaCategoria = (req, res) => {
    const { id } = req.params;
    categories.findByIdAndUpdate(id, { $set: { status: 'ATIVA' } }, (err) => {
      if (err) return res.status(500).json({ message: err.message });
      return res.status(200).json({ message: 'Categoria atualizada' });
    });
  };

}
export default CategoryController;
