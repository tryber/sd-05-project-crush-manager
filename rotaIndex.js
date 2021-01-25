const express = require('express');

const router = express.Router();

const crypto = require('crypto'); // gera token

// live com Hugão (meu ídolo)
// devem permanecer na raiz

function geraToken() {
  return crypto.randomBytes(2).toString('hex');
}

const regexEmail = /\S+@\S+\.\S+/;

function emailValidado(email) {
  return regexEmail.test(String(email).toLowerCase());
}
// retorna booleano

const validaData = (body) => body.email && body.password;
// confirma email e senha

router.post('/', async (req, res) => {
  if (!validaData(req.body.email)) {
    res.status(400).json({ message: 'missing data' });
  }
  const token = geraToken();
  // une rota raiz com rota /login
  const { email, password } = req.params;
  if (email === null || email === '') {
    res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!emailValidado(email)) {
    res
      .status(400)
      .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (!password === null || password === '') {
    res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  if (password.length < 6) {
    res
      .status(400)
      .json({ message: 'A "senha" deve ter pelo menos 6 caracteres' });
  }
  return res.status(200).json({ token });
});

module.exports = router;
