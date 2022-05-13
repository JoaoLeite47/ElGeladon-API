const paletas = [
  // db de paletas fake
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];

export const findAllPaletasService = () => {
  // serviço para listar todas as paletas
  return paletas; // retorna todas as paletas
};

export const findByIdPaletaService = (id_Paleta) => {
  // serviço para listar uma paleta
  return paletas.find((paleta) => paleta.id === id_Paleta); // busca a paleta com o id e retorna o valor
};

export const createPaletaService = (newPaleta) => {
  //  criar uma paleta
  const newId = paletas.length + 1; // pega o id da paleta mais um
  newPaleta.id = newId; // atribui o id ao novo objeto
  paletas.push(newPaleta); // adiciona o novo objeto ao array de paletas
  return newPaleta; // retorna o novo objeto
};

export const updatePaletaService = (id, paletaEdit) => {
  // serviço para atualizar uma paleta
  paletaEdit['id'] = id; // atribui o id ao objeto editado
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id); // busca o indice da paleta com o id
  paletas[paletaIndex] = paletaEdit; // atualiza o objeto na posição do indice
  return paletaEdit; // retorna o objeto editado
};

export const deletePaletaService = (id_Paleta) => {
  // serviço para deletar uma paleta
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id_Paleta); // busca o indice da paleta com o id
  return paletas.splice(paletaIndex, 1); // remove o objeto na posição do indice
};
