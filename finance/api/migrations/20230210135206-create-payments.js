module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Payments', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    valor: {
      type: Sequelize.DECIMAL,
    },
    nome: {
      type: Sequelize.STRING,
    },
    numeroDoCartao: {
      type: Sequelize.STRING,
    },
    validade: {
      type: Sequelize.STRING,
    },
    cvv: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Payments'),
};
