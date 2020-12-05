const { lerCrush, adicionaCrush } = require('../services');

module.exports = async (req, res) => {
  const { name, age, date } = req.body;
  const listaAtualCrush = await lerCrush();
  const id = listaAtualCrush.length + 1;
  adicionaCrush(listaAtualCrush, { id, name, age, date });
  res.status(201).json({ id, name, age, date });
};
