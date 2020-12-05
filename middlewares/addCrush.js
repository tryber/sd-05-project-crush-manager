const { lerCrush, adicionaCrush } = require('../services');

module.exports = async (req, res) => {
  const { name, age, date } = req.body;
  const listaAtualCrush = await lerCrush();
  console.log("crushlist",listaAtualCrush);
  const id = listaAtualCrush.length + 1;
  adicionaCrush(listaAtualCrush, { id, name, age, date });
  res.status(200).json({ id, name, age, date });
};
