const crypto = require('crypto');

function verifyEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  return emailRegex.test(email);
}
function verifypassword(password) {
  const passwordRegex = /^\d{4,8}$/gm;
  return passwordRegex.test(password);
}

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const validEmail = verifyEmail(email);
  const validPassword = verifypassword(password);
  if (validEmail && validPassword) {
    const token = crypto.randomBytes(8).toString('hex');
    return res.status(200).json({ token });
  }
  if (email === '' || !email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!validEmail) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (password === '' || !password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: 'A "senha" deve ter pelo menos 6 caracteres' });
  }
};
