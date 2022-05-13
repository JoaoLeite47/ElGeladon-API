import express from 'express';

import cors from 'cors';

import { route } from './src/routes/paletas.route.js';

const app = express(); // instancia do express

app.use(express.json()); // permite que o express entenda json

app.use(cors()); // permite que as rotas sejam acessadas pelo frontend

app.use('/paletas', route); // define a rota para acesso aos dados

const port = 3000; // porta padrão

app.listen(port, () => {
  // inicia o servidor
  console.log(`Servidor rodando em http://localhost:${port}`); // mensagem de sucesso
});
