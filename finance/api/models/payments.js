module.exports = (sequelize, DataTypes) => {
  const Payments = sequelize.define('Payments', {
    valor: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 40],
      },
    },
    numeroDoCartao: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isCreditCard: true,
      },
    },
    validade: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /[2][0][2-9][3-9]-(0[1-9]|1[0-2])$/gm,
          msg: 'Data deve estar no padrão aaaa-mm',
        },
      },
    },
    cvv: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [3, 3],
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['CRIADO', 'CONFIRMADO', 'CANCELADO']],
      },
      defaultValue: 'CRIADO',
    },
  }, {});
  // eslint-disable-next-line func-names
  Payments.associate = function (models) {
    // associations can be defined here
  };
  return Payments;
};
