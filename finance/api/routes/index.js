const bodyParser = require('body-parser');
const payments = require('./paymentsRoute');

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(payments);
};
