/* eslint-disable no-shadow */
/* eslint-disable new-cap */
import User from '../models/Account.js';
import senhaEcrypt from '../helpers/senhaEncrypt.js';
import createJWT from '../strategies/createToken.js';

class AccountController {
  static login = (req, res) => {
    const token = createJWT(req.user);
    res.set('Authorization', token);
    res.status(204).send();
  };

  static listarContas = (req, res) => {
    User.find((err, User) => res.status(200).json(User));
  };

  static inserirConta = (req, res) => {
    const user = new User(req.body);
    // const hashSenha = senhaEcrypt(req.body.dadosCadastro.senha);
    const hashSenha = senhaEcrypt(req.body.senha);
    user.senha = hashSenha;
    user.save((err) => {
      if (err) return res.status(500).json({ message: `${err.message} - FALHA AO CADASTRAR` });
      return res.status(201).json(user);
    });
  };

  static buscarContabyId = (req, res) => {
    const { id } = req.params;
    // eslint-disable-next-line no-shadow
    User.findById(id, (err, User) => {
      if (err) return res.status(404).send('ID not found');
      return res.status(200).json(User);
    });
  };

  static deletarConta = (req, res) => {
    const { id } = req.params;
    User.findByIdAndDelete(id, (err) => {
      if (err) return res.status(404).send('ID not found');
      return res.status(204).json({ message: 'Excluido com sucesso' });
    });
  };

  static atualizatConta = (req, res) => {
    const { id } = req.params;
    User.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) return res.status(404).send('ID not found');
      return res.status(200).json({ message: 'Conta atualizada com suscesso' });
    });
  };
}

export default AccountController;
