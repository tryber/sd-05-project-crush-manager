const fs = require('fs').promises;

const { lerCrush } = require('../services/crushManager');

const editarCrush = async (novoCrush) => {
  fs.writeFile('./crush.json', JSON.stringify(novoCrush));
};

module.exports = async (req, res) => {
  const { name, age, date } = req.body;
  const id = parseInt(req.params.id, 10);
  const results = await lerCrush();
  const crushEncontrado = results.find((crush) => crush.id === id);
  const index = results.indexOf(crushEncontrado);
  results[index] = { id, name, age, date };
  await editarCrush(results);
  return res.status(200).json({ id, name, age, date });
};
