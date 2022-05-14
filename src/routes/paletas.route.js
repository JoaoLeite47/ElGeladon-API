import express from 'express'; // importa o express

import {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
} from '../controllers/paletas.controller.js'; // importa o controller

export const route = express.Router(); // instancia o router do express

route.get('/todas-paletas', findAllPaletasController); // rota para listar todas as paletas (GET ALL)

route.get('/paleta/:id', findByIdPaletaController); // rota para listar uma paleta (GET BY ID)

route.post('/create', createPaletaController); // rota para criar uma paleta (POST)

route.put('/update/:id', updatePaletaController); // rota para atualizar uma paleta (PUT)

route.delete('/delete/:id', deletePaletaController); // rota para deletar uma paleta (DELETE)
