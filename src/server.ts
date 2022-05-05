// Banco de dados utilizado: SQLite - Knex.js

import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();

//Adicionando plugin
app.use(express.json());

app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))





//Define a porta Back-end
app.listen(3333);

