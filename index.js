const express = require('express');

const crypto = require('crypto');

const bodyparse = require('body-parser');

const middlewares = require('./middlewares');

const app = express();

const PORT = 3000;

app.use(bodyparse.json());

// não remova esse endpoint, e para o avaliador funcionarr
app.get('/', (request, response) => {
  response.send();
});

app.post('/login', middlewares.loginValidator, (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  return res.status(200).send({ token });
});

app.get('/crush/:id', middlewares.auth, middlewares.retornaCrush);

app.get('/crush', middlewares.auth, middlewares.todosCrush);

app.put('/crush/:id', middlewares.auth, middlewares.validarCrush, middlewares.editarCrush);

app.post('/crush', middlewares.auth, middlewares.criarCrush);

app.delete('/crush/:id', middlewares.auth, middlewares.deletaCrush);

app.get('/crush/search', middlewares.auth, middlewares.searchTerm);

app.listen(PORT, () => console.log('ON LINE!'));
