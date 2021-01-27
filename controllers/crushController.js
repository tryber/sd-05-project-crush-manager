const { readCrushFile, addCrushFile } = require('../services/fsFunc');

const getAllCrushs = async (req, res) => {
  const crushList = await readCrushFile();
  res.status(200).json(crushList);
};

const createCrush = async (req, res) => {
  const currentCrushList = await readCrushFile();
  const id = currentCrushList.length + 1;
  const newCrush = { id, ...req.body };
  addCrushFile(currentCrushList, newCrush);
  res.status(201).json(newCrush);
};

module.exports = {
  getAllCrushs,
  createCrush,
};
