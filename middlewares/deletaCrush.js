const fs = require('fs').promises;

const { lerCrush } = require('../services/crushManager');

const editarCrush = async (novoCrush) => {
  fs.writeFile('./crush.json', JSON.stringify(novoCrush));
};

module.exports = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const results = await lerCrush();
  const listaNova = results.filter((crush) => crush.id !== id);
  await editarCrush(listaNova);
  return res.status(200).json({ message: 'Crush deletado com sucesso' });
};
