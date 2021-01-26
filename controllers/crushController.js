const { readCrushFile, addCrushFile } = require('../services/fsFunc');

const addCrush = async (req, res) => {
  const currentCrushList = await readCrushFile();
  const id = currentCrushList.length + 1;
  const newCrush = { id, ...req.body };
  addCrushFile(currentCrushList, newCrush);
  res.status(201).json(newCrush);
};

module.exports = {
  addCrush,
};
