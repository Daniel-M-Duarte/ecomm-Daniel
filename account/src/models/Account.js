import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: {
      type: String,
      required: true,
      match: /^[A-Za-zà-úÀ-Ù\s]*/g,
    },
    email: {
      type: String,
      required: true,
      match: /^[a-z0-9-_.]+@[a-z0-9-_]+\.[a-z]+\.?([a-z]+)$/g,

    },
    senha: {
      type: String,
      required: true,
    },
    dataDeCriacao: {
      type: Date,
      default: Date.now,
    },
    dadosPessoais: {
      cpf: {
        type: String,
        required: true,
        match: /^[0-9]{11,11}/gm,
        maxlength: 11,
      },
      telefone: {
        type: String,
        required: true,
        match: /^[0-9]{10,11}/gm,
        maxlength: 11,
      },
    },
    endereco: {
      rua: {
        type: String,
        required: true,
      },
      numero: {
        type: String,
        required: true,
      },
      complemento: {
        type: String,
      },
      cep: {
        type: String,
        required: true,
        match: /^[0-9]{8}/gm,
      },
      cidade: {
        type: String,
        required: true,
      },
      estado: {
        type: String,
        required: true,
        enum:
                [
                  'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG',
                  'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR',
                  'RS', 'SC', 'SE', 'SP', 'TO',
                ],
      },
    },
  },
);

const User = mongoose.model('User', accountSchema);

export default User;
