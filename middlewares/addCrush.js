/* arquivo criado com a ajuda do Paulo Ricardo turma 5,
do especialista Cristiano e com consulta ao
PR #55 da Larissa turma 5 */
const validate = require('../services/validate');
const fileSystem = require('../services/fileSystem');

const addCrush = async (req, res) => {
  const { name, age, date } = req.body;

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
    console.log(list);
    const newCrush = await fileSystem.writeCrushPromise('./crush.json', list, name, age, date);
    console.log(newCrush);
    return res.status(201).send(newCrush);
  } catch (error) {
    console.error(`Erro ao ler arquivos: ${error.message}`);
  }
};
module.exports = addCrush;
