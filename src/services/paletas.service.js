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

export const findAllPaletasService = () => { // serviço para listar todas as paletas
  return paletas; // retorna todas as paletas
};

export const findByIdPaletaService = (id_Paleta) => { // serviço para listar uma paleta
    return paletas.find((paleta) => paleta.id === id_Paleta); // busca a paleta com o id e retorna o valor
};

