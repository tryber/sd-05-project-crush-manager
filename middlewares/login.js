const { checkEmail, checkPassword } = require('../services/checkLogin');
const newToken = require('../services/newToken');

module.exports = (req, res) => {
  const { email, password } = req.body;
  // Verificação do email
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!checkEmail(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  // Verificação senha
  if (!password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  // Alterando a senha recebida pra String
  const pw = password.toString();
  if (!checkPassword(pw)) {
    return res.status(400).json({ message: 'A "senha" deve ter pelo menos 6 caracteres' });
  }
  // Gerar o token
  res.status(200).json(newToken());
};
