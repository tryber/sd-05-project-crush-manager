const { lerCrush, adicionaCrush } = require('../services/crushManager');

module.exports = async (req, res) => {
  const { name, age, date } = req.body;

  const verifyDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

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

  if (date.rate < 1 || date.rate > 5 || !Number.isInteger(date.rate)) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  if (!date || !date.datedAt || date.rate === undefined) {
    return res
      .status(400).json({
        message: 'O campo "date" é obrigatório e "datedAt" e "rate" não podem ser vazios' });
  }

  if (!verifyDate.test(String(date.datedAt))) {
    return res.status(400).json({ message: 'O campo "datedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  const listaCrushOld = await lerCrush();
  const listaCrushNew = [...listaCrushOld, { ...req.body, id: listaCrushOld.length + 1 }];
  await adicionaCrush(listaCrushNew);
  return res.status(201).json({ ...req.body, id: listaCrushOld.length + 1 });
};
