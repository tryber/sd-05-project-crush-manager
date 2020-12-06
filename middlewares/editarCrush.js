const fs = require('fs').promises;

const { lerCrush } = require('../services/crushManager');

const editarCrush = async (novoCrush) => {
  fs.writeFile('./crush.json', JSON.stringify(novoCrush));
};

module.exports = async (req, res) => {
  const { name, age, date } = req.body;
  const id = parseInt(req.params.id, 10);
  const { data } = await lerCrush();
  const crushEncontrado = data.find((crush) => crush.id === id);
  const index = data.indexOf(crushEncontrado);
  data[index] = { id, name, age, date };
  await editarCrush(data);
  return res.status(200).json({ id, name, age, date });
};
