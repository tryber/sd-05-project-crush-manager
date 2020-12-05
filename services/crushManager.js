const fs = require('fs').promises;

const adicionaCrush = async (listaAtualCrush, novoCrush) => {
  const novoCrushList = [...listaAtualCrush, novoCrush];
  fs.writeFile('./crush.json', JSON.stringify(novoCrushList));
};

const lerCrush = async () => {
  const crushList = await fs.readFile('./crush.json', 'utf-8');
  return JSON.parse(crushList);
};

module.exports = {
  adicionaCrush,
  lerCrush,
};
