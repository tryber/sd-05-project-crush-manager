const { readCrushFile, addCrushFile } = require('../services/fsFunc');

const createCrush = async (req, res) => {
  const currentCrushList = await readCrushFile();
  const id = currentCrushList.length + 1;
  const newCrush = { id, ...req.body };
  addCrushFile(currentCrushList, newCrush);
  res.status(201).json(newCrush);
};

const editCrushById = async (req, res) => {
  let index;
  const id = parseInt(req.params.id, 10);
  const crushList = await readCrushFile();
  crushList.find((crush, _index) => {
    if (crush.id === id) index = _index;
  });
  let newCrush = crushList[index];
  newCrush = { id, ...req.body };
  addCrushFile(crushList); // updates 'crush.json'
  res.status(200).json(newCrush);
};

const getAllCrushs = async (_req, res) => {
  const crushList = await readCrushFile();
  res.status(200).json(crushList);
};

const getCrushById = async (req, res) => {
  // mudando para inteiro pois o operador '===' compara tipos de dados
  // parâmetro 'radix' é 10 pois 'id' tem base decimal
  const id = parseInt(req.params.id, 10);
  const crushList = await readCrushFile();
  const crushFound = crushList.find((crush) => crush.id === id);
  if (!crushFound) res.status(404).json({ message: 'Crush não encontrado' });
  res.status(200).json(crushFound);
};

module.exports = {
  createCrush,
  editCrushById,
  getAllCrushs,
  getCrushById,
};
