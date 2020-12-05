const { lerCrush, adicionaCrush } = require('../services/crushManager');

module.exports = async (req, res) => {
  const { name, age, date } = req.body;
  const listaAtualCrush = await lerCrush();
  const id = listaAtualCrush.length + 1;
  adicionaCrush(listaAtualCrush, { name, age, id, date });
  res.status(201).json({ id, name, age, date });
};
