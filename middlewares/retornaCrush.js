const { lerCrush } = require('../services/crushManager');

module.exports = async (req, res) => {
  const { data } = await lerCrush();
  const { id } = req.params;

  const filteredCrush = { data }.find((crush) => crush.id === parseInt(id, 10));
  if (!filteredCrush) {
    return res.status(404).send({ message: 'Crush não encontrado' });
  }
  return res.status(200).send(filteredCrush);
};
