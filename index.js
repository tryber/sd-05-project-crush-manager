const express = require('express');

const crypto = require('crypto');

const bodyparse = require('body-parser');

const middlewares = require('./middlewares');

const { lerCrush, validarToken } = require('./middlewares/crushReader')

const app = express();

app.use(bodyparse.json());

app.post('/login', middlewares.loginValidator, (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  return res.status(200).send({ token });
});

app.get('/crush', validarToken, (_req, res, _next) => {
  const data = lerCrush(__dirname);
  res.status(200).json(data);
});

app.post('/get', (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  return res.status(200).send({ token });
});

// não remova esse endpoint, e para o avaliador funcionarr
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ON LINE!'));
