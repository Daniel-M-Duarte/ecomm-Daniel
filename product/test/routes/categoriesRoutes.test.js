import {
  afterAll, beforeAll, describe, it, test,
} from '@jest/globals';
import mongoose from 'mongoose';
import request from 'supertest';
import app from '../../src/app.js';

beforeAll(async () => {
  await mongoose.connect('mongodb://admin:secret@localhost:27017/ecomm-product-test?authSource=admin');
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('GET in /api/categories', () => {
  it('Should return a list of categories', async () => {
    await request(app)
      .get('/api/categories')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let idNewCategory;

describe('POST in /api/admin/categories', () => {
  it('Should creates a new category', async () => {
    const newCategory = await request(app)
      .post('/api/admin/categories')
      .send({
        nome: 'NEWCAT',
        status: 'ATIVA',
      })
      .expect('content-type', /json/)
      .expect(201);
    // eslint-disable-next-line no-underscore-dangle
    idNewCategory = newCategory.body._id;
  });
});

describe('GET in /api/categories', () => {
  it('Should return a category selected by ID', async () => {
    await request(app)
      .get(`/api/categories/${idNewCategory}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('PATCH in /api/admin/categories/id', () => {
  it('Should update status of category', async () => {
    await request(app)
      .patch(`/api/admin/categories/${idNewCategory}`)
      .send({ status: 'ATIVA' })
      .set('Accept', 'application/json')
      .expect(200);
  });
});

describe('PUT in /api/admin/categories/id', () => {
  test.each([
    ['nome', { nome: 'NEWNAME' }],
    ['status', { status: 'ATIVA' }],
  ])('Should update %s', async (key, param) => {
    await request(app)
      .put(`/api/admin/categories/${idNewCategory}`)
      .set('Accept', 'application/json')
      .send({ param })
      .expect(200);
  });
});

describe('DELETE in /api/admin/categories/:id', () => {
  it('Should deletes a category selected by ID', async () => {
    await request(app)
      .delete(`/api/admin/categories/${idNewCategory}`)
      .set('Accept', 'application/json')
      .expect(204);
  });
});
