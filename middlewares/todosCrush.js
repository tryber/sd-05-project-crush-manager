const { lerCrush } = require('../services/crushManager');

module.exports = async (_req, res) => {
  const { data } = await lerCrush();
  res.status(200).json(data);
};
