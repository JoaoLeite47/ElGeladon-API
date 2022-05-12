import { findAllPaletasService, findByIdPaletaService } from '../services/paletas.service.js';

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
