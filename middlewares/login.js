const generateToken = require('../services/generate-token');

const validateEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  const passwordRegex = /^.{6,}$/;
  return passwordRegex.test(password);
};

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email) next({ status: 400, message: 'O campo "email" é obrigatório' });
  if (!password) next({ status: 400, message: 'O campo "password" é obrigatório' });
  if (!validateEmail(email)) next({ status: 400, message: 'O "email" deve ter o formato "email@email.com"' });
  if (!validatePassword(password)) next({ status: 400, message: 'A "senha" deve ter pelo menos 6 caracteres' });
  res.data = { token: generateToken() };
  next();
};
