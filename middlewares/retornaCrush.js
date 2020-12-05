const { lerCrush } = require('../services/crushManager');

module.exports = async (req, res) => {
  const results = await lerCrush();
  const { id } = req.params;
  const idNum = parseInt(id, 10);
  console.log('ID',idNum, results)
  const filteredCrush = results.find((crush) => crush.id === idNum);
  if (!filteredCrush) {
    return res.status(404).send({ message: 'Crush não encontrado' });
  }
  return res.status(200).send(filteredCrush);
};
