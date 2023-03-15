/* eslint linebreak-style: ["error", "unix"] */
import {
  afterAll, beforeAll, describe, it,
} from '@jest/globals';
import mongoose from 'mongoose';
import request from 'supertest';
import app from '../../src/app.js';

beforeAll(async () => {
  await mongoose.connect('mongodb://admin:secret@localhost:27017/ecomm-account-test?authSource=admin');
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('GET in /api/accounts', () => {
  it('Should return all account', async () => {
    await request(app)
      .get('/api/accounts')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let id;

describe('POST in /api/admin/accounts', () => {
  it('Should creates a new account', async () => {
    const resposta = await request(app)
      .post('/api/admin/accounts')
      .send({
        dadosCadastro: {
          nome: 'Fulano da Silva',
          email: 'example@example.com',
          senha: 'D7q@665skk',
        },
        dadosPessoais: {
          cpf: '29121313083',
          telefone: '87445699878',
        },
        endereco: {
          rua: 'Avenida Leme',
          numero: '673',
          cep: '95520974',
          cidade: 'Osório',
          estado: 'RS',
        },
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(201);

    // eslint-disable-next-line no-underscore-dangle
    id = resposta.body._id;
  });
});

describe('GET in /api/accounts/id', () => {
  it('Should return an especific account select by ID', async () => {
    await request(app)
      .get(`/api/accounts/${id}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('PUT in /api/admin/accounts/id', () => {
  it('Should update an account selected by ID', async () => {
    await request(app)
      .put(`/api/admin/accounts/${id}`)
      .send({
        dadosCadastro: {
          nome: 'Roberval Cleiverson',
          email: 'new_e-mail@example.com',
          senha: 'DS7q@665s55k',
        },
        dadosPessoais: {
          cpf: '95869945038',
          telefone: '98441299825',
        },
        endereco: {
          rua: 'Avenida Leme',
          numero: '123',
          cep: '37435971',
          cidade: 'Águas de Contendas',
          estado: 'MG',
        },
      })
      .set('Accept', 'application/json')
      .expect(200);
  });
});

describe('DELETE in /api/admin/accounts/id', () => {
  it('Should delete an account selected by ID', async () => {
    await request(app)
      .delete(`/api/admin/accounts/${id}`)
      .set('Accept', 'application/json')
      .expect(204);
  });
});
