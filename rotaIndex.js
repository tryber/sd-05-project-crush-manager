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

router.post('/', (req, res) => {
  if (!req.body.email) {
    res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!emailValidado(req.body.email)) {
    res
      .status(400)
      .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (!req.body.password) {
    res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  if (req.body.password.toString().length < 6) {
    res
      .status(400)
      .json({ message: 'A "senha" deve ter pelo menos 6 caracteres' });
  }
  const token = geraToken();
  res.status(200).json({ token });
});

module.exports = router;
