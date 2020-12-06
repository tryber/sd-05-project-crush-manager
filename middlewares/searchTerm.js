const { lerCrush } = require('../services/crushManager');

module.exports = async (req, res) => {
  const { q } = req.query;
  const results = await lerCrush();
  const searchTerm = results.filter((crush) => crush.name.includes(q));
  if (searchTerm.length === 0) {
    return res.status(404).json({ message: 'nome não encontrado' });
  }
  return res.status(200).json(searchTerm);
};
