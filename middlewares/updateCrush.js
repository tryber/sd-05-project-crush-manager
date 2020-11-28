const { readCrush, updateCrush } = require('../services/crud');

module.exports = async (req, res) => {
  const idNumber = Number(req.params.id);
  const arrayOfCrushes = await readCrush();
  const crushById = arrayOfCrushes.find((crush) => crush.id === idNumber);
  // até aqui é um getCrushById, para localizar o crush que será modificado
  const { name, age, date } = req.body;
  const crushToUpdate = arrayOfCrushes.indexOf(crushById);
  arrayOfCrushes[crushToUpdate] = { name, age, idNumber, date };
  await updateCrush(arrayOfCrushes);
  return res.status(200).json(arrayOfCrushes[crushToUpdate]);
};