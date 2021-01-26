const fileSystem = require('../services/fileSystem');

const getCrush = async (_req, res) => {
  const file = await fileSystem.readCrushPromise('./crush.json');
  const list = JSON.parse(file);
  if (!list) {
    return res.status(200).send([]);
  }
  return res.status(200).send(list);
};

module.exports = getCrush;
