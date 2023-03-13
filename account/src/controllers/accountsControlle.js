/* eslint-disable no-shadow */
/* eslint-disable new-cap */
import users from '../models/Account.js';

class AccountController {
  static listarContas = (req, res) => {
    users.find((err, users) => res.status(200).json(users));
  };

  static inserirConta = (req, res) => {
    const user = new users(req.body);
    user.save((err) => {
      if (err) return res.status(500).json({ message: `${err.message} - FALHA AO CADASTRAR` });
      return res.status(201).json(user);
    });
  };

  static buscarContabyId = (req, res) => {
    const { id } = req.params;
    // eslint-disable-next-line no-shadow
    users.findById(id, (err, users) => {
      if (err) return res.status(404).send('ID not found');
      return res.status(200).json(users);
    });
  };

  static deletarConta = (req, res) => {
    const { id } = req.params;
    users.findByIdAndDelete(id, (err) => {
      if (err) return res.status(404).send('ID not found');
      return res.status(204).json({ message: 'Excluido com sucesso' });
    });
  };

  static atualizaConta = (req, res) => {
    const { id } = req.params;
    users.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) return res.status(404).send('ID not found');
      return res.status(200).json({ message: 'Conta atualizada com suscesso' });
    });
  };
}

export default AccountController;
