import {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
} from '../services/paletas.service.js';

export const findAllPaletasController = (req, res) => {
  // rota para listar todas as paletas (GET ALL)
  const allPaletas = findAllPaletasService(); // chama o serviço para listar todas as paletas

  if (allPaletas.length == 0) {
    // se não existir paletas
    return res.status(404).send({ message: 'Não existe Paleta cadastrada!' }); // retorna mensagem de erro
  }

  res.status(200).send(allPaletas); // retorna todas as paletas
};

export const findByIdPaletaController = (req, res) => {
  // rota para listar uma paleta (GET BY ID)
  const id_Paleta = Number(req.params.id); // pega o id da paleta

  if (!id_Paleta) {
    // se o id não for um número
    return res.status(400).send({ message: 'id inválido!' }); // retorna um erro 400
  }

  const paleta_escolhida = findByIdPaletaService(id_Paleta); // busca a paleta com o id

  if (!paleta_escolhida) {
    // se não encontrar a paleta
    return res.status(404).send({ message: 'Paleta não encontrada!' }); // retorna um erro 404
  }

  res.send(paleta_escolhida); // retorna a paleta
};

export const createPaletaController = (req, res) => {
  // rota para criar uma paleta (POST)
  const paleta = req.body; // pega o corpo da requisição

  if (
    !paleta ||
    !paleta.sabor ||
    !paleta.descricao ||
    !paleta.foto ||
    !paleta.preco
  ) {
    // se não tiver todos os dados
    return res.status(400).send({ message: 'Envie todos os dados da paleta!' }); // retorna erro 400
  }
  const newPaleta = createPaletaService(paleta); // chama o serviço para criar uma paleta
  res.status(201).send(newPaleta); // retorna a nova paleta
};

export const updatePaletaController = (req, res) => {
  // rota para atualizar uma paleta (PUT)
  const id = Number(req.params.id); // pega o id da paleta

  if (!id) {
    return res.status(400).send({ message: 'id inválido!' }); // retorna erro 400
  }
  const paletaEdit = req.body; // pega o corpo da requisição

  if (
    !paletaEdit ||
    !paletaEdit.sabor ||
    !paletaEdit.descricao ||
    !paletaEdit.foto ||
    !paletaEdit.preco
  ) {
    // se não tiver todos os dados
    return res.status(404).send({ message: 'Envie todos os dados da paleta!' }); // retorna erro 400
  }
  const updatedPaleta = updatePaletaService(id, paletaEdit); // chama o serviço para atualizar uma paleta
  res.send(updatedPaleta);
};

export const deletePaletaController = (req, res) => {
  // rota para deletar uma paleta (DELETE)
  const id_Paleta = req.params.id;
  // pega o id da paleta
  deletePaletaService(id_Paleta); // chama o serviço para deletar uma paleta
  res.send({ message: 'Paleta deletada com sucesso' }); // retorna uma mensagem de sucesso
};
