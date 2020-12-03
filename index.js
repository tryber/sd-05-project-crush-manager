const express = require('express');

const crypto = require('crypto');

const middlewares = require('./middlewares');

const bodyparse = require('body-parser');

const app = express();

app.use(bodyparse.json());

app.post('/login', middlewares.loginValidator, (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  return res.status(200).send({ token });
});

// não remova esse endpoint, e para o avaliador funcionarr
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ON LINE!'));
