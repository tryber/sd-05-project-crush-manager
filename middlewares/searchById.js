const fileSystem = require('../services/fileSystem');

const searchById = async (req, res) => {
  const file = await fileSystem.readCrushPromise('./crush.json');
  console.log(typeof file);
  const list = JSON.parse(file);
  const crush = list.find((element) => parseInt(req.params.id, 10) === element.id);
  if (crush) {
    res.status(200).send(crush);
  }
  res.status(404).json({ message: 'Crush não encontrado' });
};

module.exports = searchById;
