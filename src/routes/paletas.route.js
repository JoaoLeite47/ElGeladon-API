import express from 'express'; // importa o express

import {
  findAllPaletasController,
  findByIdPaletaController,
} from '../controllers/paletas.controller.js'; // importa o controller

export const route = express.Router(); // instancia o router do express

route.get('/todas-paletas', findAllPaletasController); // rota para listar todas as paletas (GET ALL)

route.get('/paleta/:id', findByIdPaletaController); // rota para listar uma paleta (GET BY ID)
