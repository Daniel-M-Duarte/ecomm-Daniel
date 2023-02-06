import users from '../models/Account.js'

class AccountController{

  static listarContas = (req, res) =>{
    users.find((err, users) =>{
        res.status(200).json(users)
        })
    }

    static inserirConta = (req, res) =>{
        const user = new users(req.body);
        user.save((err) =>{
            if(err) return res.status(500).json({message: `${err.message} - FALHA AO CADASTRAR`});
            res.status(201).json(user)
        })
    }

    static buscarContabyId = (req, res) =>{
        const { id } = req.params;
        users.findById(id, (err, users) =>{
            if(err) return res.status(404).send('ID not found');
            res.status(200).json(users);
        })
    }

    static deletarConta = (req, res) =>{
        const { id } = req.params;
        users.findByIdAndDelete(id, (err, users) =>{
            if(err) return res.status(404).send('ID not found');
            res.status(400).json({message: "Excluido com sucesso"})
        })
    }

    static atualizatConta = (req, res) =>{
        const { id } = req.params;
        users.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(err) return res.status(404).send('ID not found');
            res.status(202).json({message: "Conta atualizada com suscesso"})
        })
    }
}

export default AccountController;