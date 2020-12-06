const { lerCrush } = require('../services/crushManager');

module.exports = async (_req, res) => {
  const crushList = await lerCrush();
  res.status(200).json(crushList);
};
