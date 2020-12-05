const express = require('express');

const crypto = require('crypto');

const bodyparse = require('body-parser');

const middlewares = require('./middlewares');

const { lerCrush } = require('./services/crushManager');

const app = express();

app.use(bodyparse.json());

app.post('/login', middlewares.loginValidator, (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  return res.status(200).send({ token });
});

app.get('/crush', middlewares.auth, async (_req, res) => {
  const crushList = await lerCrush();
  res.status(200).json(crushList);
});

app.get('/crush/:id', middlewares.auth, middlewares.retornaCrush);


app.post('/crush', middlewares.auth, middlewares.criarCrush);

app.post('/get', (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  return res.status(200).send({ token });
});

// não remova esse endpoint, e para o avaliador funcionarr
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ON LINE!'));
