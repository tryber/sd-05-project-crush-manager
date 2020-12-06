const { lerCrush, adicionaCrush } = require('../services/crushManager');

module.exports = async (req, res) => {
  const { name, age, date } = req.body;
  const { data } = await lerCrush();
  const id = data.length + 1;
  const novoCrush = { name, age, id, date };
  data.push(novoCrush);
  adicionaCrush(data);
  res.status(201).json(data);
};
