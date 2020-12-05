const fs = require('fs').promises;

const lerCrush = async () => {
  const crushList = await fs.readFile('./crush.json', 'utf-8');
  return JSON.parse(crushList);
};

const adicionaCrush = async (listaAtual, novaLista) => {
  const listaPronta = [...listaAtual, novaLista];
  fs.writeFile('./crush.json', JSON.stringify(listaPronta));
};

module.exports = {
  adicionaCrush,
  lerCrush,
};
