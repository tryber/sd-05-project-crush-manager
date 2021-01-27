const fileSystem = require('../services/fileSystem');
const validate = require('../services/validate');

const editCrush = async (req, res) => {
  const { name, age, date } = req.body;
  const id = parseInt(req.params.id, 10);

  if (!name) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }

  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }

  if (age < 18) {
    return res.status(400).json({ message: 'O crush deve ser maior de idade' });
  }

  if (!date || !date.datedAt || date.rate === undefined) {
    return res.status(400).json({ message: 'O campo "date" é obrigatório e "datedAt" e "rate" não podem ser vazios' });
  }

  if (!validate.validateDate(date.datedAt)) {
    return res.status(400).json({ message: 'O campo "datedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  if (date.rate < 1 || date.rate > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  try {
    const file = await fileSystem.readCrushPromise('./crush.json');
    const list = JSON.parse(file);
    const crush = list.find((element) => parseInt(id, 10) === element.id);
    if (!crush) res.status(404).json({ message: 'Crush não encontrado' });
    list[id] = { name, age, id, date };
    await fileSystem.editCrushPromise('./crush.json', list);
    return res.status(200).send(list[id]);
  } catch (error) {
    console.error(`Erro ao ler arquivos: ${error.message}`);
  }
};

module.exports = editCrush;
