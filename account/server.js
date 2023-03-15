/* eslint-disable import/extensions */
import * as dotenv from 'dotenv';
import db from './config/dbConnect.js';
import app from './src/app.js';

dotenv.config();

db.on('error', console.log.bind(console, 'Erro de conexão com o db'));
db.once('open', () => {
  console.log('Conexão com o banco realizada com sucesso');
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
