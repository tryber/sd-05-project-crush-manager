const express = require('express');

const router = express.Router();

const crypto = require('crypto'); // gera token

// live com Hugão (meu ídolo)
// devem permanecer na raiz

function geraToken() {
  return crypto.randomBytes(8).toString('hex');
}

const regexEmail = /\S+@\S+\.\S+/;

function emailValidado(email) {
  return regexEmail.test(String(email).toLowerCase());
}
// retorna booleano

router.post('/', (req, res) => {
  if (!req.body.email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!emailValidado(req.body.email)) {
    return res
      .status(400)
      .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (!req.body.password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  if (req.body.password.toString().length < 6) {
    return res
      .status(400)
      .json({ message: 'A "senha" deve ter pelo menos 6 caracteres' });
  }
  const token = geraToken();
  return res.status(200).json({ token });
});

module.exports = router;
