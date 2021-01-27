const fileSystem = require('../services/fileSystem');

const queryCrush = async (req, res) => {
  const file = await fileSystem.readCrushPromise('./crush.json');
  const list = JSON.parse(file);
  const element = req.query.name;
  const match = list.filter((crush) => crush.name.includes(element));
  if (!element) return res.status(200).send(list);
  if (!match) return res.status(200).send([]);
  return res.status(200).send(match);
};

module.exports = queryCrush;
