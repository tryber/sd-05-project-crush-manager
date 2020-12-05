const fs = require('fs').promises;

module.exports = async (listaAtualCrush, novoCrush) => {
  const novoCrushList = [...listaAtualCrush, novoCrush];
  fs.writeFile('./crush.json', JSON.stringify(novoCrushList));
};
