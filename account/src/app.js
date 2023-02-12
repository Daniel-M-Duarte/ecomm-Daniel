import express from 'express';
import routes from './routes/index.js';
import db from '../config/dbConnect.js';

db.on('error', console.log.bind(console, 'Erro de conexão com o db'));
db.once('open', () =>{
    console.log('Conexão com o banco realizada com sucesso');
})

const app = express();
app.use(express.json());
routes(app);

export default app;