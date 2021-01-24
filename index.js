const express = require('express');
const { error } = require('./middlewares');
const { loginValidate } = require('./services/index');

const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_req, res) => {
  res.send('Ok');
});

app.post('/login', loginValidate, (req, res) => {
  res.status(200).json(req.data); // token passado por 'data'
});

app.use(error);

app.listen(3000, () => {
  console.log('Online 3000!');
});
