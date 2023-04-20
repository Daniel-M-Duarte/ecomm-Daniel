/* eslint-disable no-undef */
import mongoose from 'mongoose';
import {
  describe, it, test,
} from '@jest/globals';
import request from 'supertest';
import app from '../../src/app.js';

beforeAll(async () => {
  await mongoose.connect('mongodb://admin:secret@mongo:27017/ecomm-product-test?authSource=admin');
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('GET in /api/products', () => {
  it('Should return a lista of all products', async () => {
    await request(app)
      .get('/api/products')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let idNewProduct;

describe('POST in /api/admin/products', () => {
  it('Should creates a new prouct', async () => {
    const newProduct = await request(app)
      .post('/api/admin/products')
      .send({
        produto: 'garrafa',
        descricao: 'garra termica que conserva temperatura do liquido',
        slug: 'garrafa-termica',
        precoUnitario: 56,
        qtd_estoque: 12,
        categoria: '63efab3bbdd3d10076be19ee',
      })
      .expect('content-type', /json/)
      .expect(201);

    // eslint-disable-next-line no-underscore-dangle
    idNewProduct = newProduct.body._id;
  });
});

describe('GET in /api/products/id', () => {
  it('Should select a product by ID', async () => {
    await request(app)
      .get(`/api/products/${idNewProduct}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('PUT in /api/admin/products/id', () => {
  test.each([
    ['produto', { produto: 'Liquidificador' }],
    ['descricao', { descricao: 'Liquidificador - TESTE' }],
    ['slug', { slug: 'Liquidificador-eletro' }],
    ['precoUnitario', { precoUnitario: 152.75 }],
    ['qtd_estoque', { qtd_estoque: 10 }],
    ['categoria', { categoria: '63e10d64b6ac1d0ab1c87104' }],
  ])('Should update %s', async (key, params) => {
    await request(app)
      .put(`/api/admin/products/${idNewProduct}`)
      .set('Accept', 'application/json')
      .send({ params })
      .expect(202);
  });
});

describe('DELETE in /api/admin/products/id', () => {
  it('Should deletes a product selected by ID', async () => {
    await request(app)
      .delete(`/api/admin/products/${idNewProduct}`)
      .expect(204);
  });
});
