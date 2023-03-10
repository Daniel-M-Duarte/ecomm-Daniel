/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Payments', [{
    valor: 9657.00,
    nome: 'Bulker ',
    numeroDoCartao: '1244-3415-0744-8158',
    validade: '2023-05',
    cvv: '787',
    status: 'CRIADO',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Payments', null, {}),
};
