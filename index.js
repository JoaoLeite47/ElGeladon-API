import express from 'express';
import cors from 'cors';

const app = express(); // instancia do express
app.use(express.json()); // permite que o express entenda json
app.use(cors()); // permite que as rotas sejam acessadas pelo frontend

const paletas = [
  // db de paletas fake
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];

app.get('/paletas/todas-paletas', (req, res) => {
  // rota para listar todas as paletas (GET ALL)
  res.send(paletas); // retorna todas as paletas
});

app.get('/paletas/paleta/:id', (req, res) => {
  // rota para listar uma paleta (GET BY ID)
  const id_Paleta = Number(req.params.id); // pega o id da paleta
  const paleta_escolhida = paletas.find((paleta) => paleta.id === id_Paleta); // busca a paleta com o id
  res.send(paleta_escolhida); // retorna a paleta
});

const port = 3000; // porta padrão

app.listen(port, () => {
  // inicia o servidor
  console.log(`Servidor rodando em http://localhost:${port}`); // mensagem de sucesso
});
