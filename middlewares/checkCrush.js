const checkDate = require('../services/checkDateFormat');

module.exports = (req, _res, next) => {
  const { name, age, date } = req.body;

  if (!name) return next({ status: 400, message: 'O campo "name" é obrigatório' });
  if (name.length < 3) return next({ status: 400, message: 'O "name" deve ter pelo menos 3 caracteres' });

  if (!age) return next({ status: 400, message: 'O campo "age" é obrigatório' });
  if (age < 18) return next({ status: 400, message: 'O crush deve ser maior de idade' });

  if (!date || !date.datedAt || date.rate === undefined) return next({ status: 400, message: 'O campo "date" é obrigatório e "datedAt" e "rate" não podem ser vazios' });
  if (!checkDate(date.datedAt)) return next({ status: 400, message: 'O campo "datedAt" deve ter o formato "dd/mm/aaaa"' });
  if (date.rate < 1 || date.rate > 5) return next({ status: 400, message: 'O campo "rate" deve ser um inteiro de 1 à 5' });

  return next();
};
