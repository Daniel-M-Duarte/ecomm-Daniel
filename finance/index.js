/* eslint-disable linebreak-style */

const dotenv = require('dotenv');
const express = require('express');
const routes = require('./api/routes');
require('./api/authorization/bearerStrategy');

dotenv.config();

const app = express();
const port = process.env.PORT || 3003;

routes(app);

app.listen(port, () => console.log(`Escutando na porta ${port}`));

module.exports = app;
