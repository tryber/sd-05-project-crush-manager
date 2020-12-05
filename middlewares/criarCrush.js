const { lerCrush, adicionaCrush } = require('../services/crushManager');

module.exports = async (req, res) => {
  const { name, age, date } = req.body;
  const { datedAt, rate } = req.body.date ? date : '';
  const verifyDate = /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\d\d$/g;
  if (!name) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (String(name).length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (age < 18) {
    return res.status(400).json({ message: 'O crush deve ser maior de idade' });
  }
  if (rate < 1 || rate > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  if (!date || !datedAt || !rate) {
    return res
      .status(400)
      .json({ message: 'O campo "date" é obrigatório e "datedAt" e "rate" não podem ser vazios' });
  }
  if (!verifyDate.test(String(datedAt))) {
    return res.status(400).json({ message: 'O campo "datedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  const oldCrushArray = await lerCrush();
  const newCrushArray = [...oldCrushArray, { ...req.body, id: oldCrushArray.length + 1 }];
  await adicionaCrush(newCrushArray);
  return res.status(201).json({ ...req.body, id: oldCrushArray.length + 1 });
};
