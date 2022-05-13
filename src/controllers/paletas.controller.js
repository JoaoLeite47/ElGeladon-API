import {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService
} from '../services/paletas.service.js';

export const findAllPaletasController = (req, res) => {
  // rota para listar todas as paletas (GET ALL)
  const allPaletas = findAllPaletasService(); // chama o serviço para listar todas as paletas

  res.send(allPaletas); // retorna todas as paletas
};

export const findByIdPaletaController = (req, res) => {
  // rota para listar uma paleta (GET BY ID)
  const id_Paleta = Number(req.params.id); // pega o id da paleta

  const paleta_escolhida = findByIdPaletaService(id_Paleta); // busca a paleta com o id

  res.send(paleta_escolhida); // retorna a paleta
};

export const createPaletaController = (req, res) => {
  // rota para criar uma paleta (POST)
  const paleta = req.body; // pega o corpo da requisição
  const newPaleta = createPaletaService(paleta); // chama o serviço para criar uma paleta
  res.send(newPaleta);
};

export const updatePaletaController = (req, res) => {
  // rota para atualizar uma paleta (PUT)
  const id = Number(req.params.id); // pega o id da paleta
  const paletaEdit = req.body; // pega o corpo da requisição
  const updatedPaleta = updatePaletaService(id, paletaEdit); // chama o serviço para atualizar uma paleta
  res.send(updatedPaleta);
};

export const deletePaletaController = (req, res) => {
  // rota para deletar uma paleta (DELETE)
  const id_Paleta = req.param.id; // pega o id da paleta
  deletePaletaService(id_Paleta); // chama o serviço para deletar uma paleta
  res.send({ message: 'Paleta deletada com sucesso' }); // retorna uma mensagem de sucesso
};
