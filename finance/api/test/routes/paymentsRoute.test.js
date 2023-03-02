const { describe, it } = require('@jest/globals');
const request = require('supertest');
const app = require('../../../index');

let server;
beforeEach(() => {
  const port = 3030;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('GET in /admin/payments', () => {
  it('Should returns all payments', async () => {
    await request(app)
      .get('/admin/payments')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let newId;

describe('POST in /payments', () => {
  it('Should createas a new payment', async () => {
    const resposta = await request(app)
      .post('/payments')
      .send({
        valor: 18850,
        nome: 'Robertson Pereira',
        numeroDoCartao: '3007 539169 0589',
        validade: '2024-11',
        cvv: '656',
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(201);
    newId = resposta.body.id;
  });
});

describe('GET in /admin/payments/id', () => {
  it('Should return a specific payment select by ID', async () => {
    await request(app)
      .get(`/admin/payments/${newId}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('PATCH in /admin/payments/:id/confirmacao', () => {
  it('Should confirm a payment', async () => {
    await request(app)
      .patch(`/admin/payments/${newId}/confirmacao`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});
