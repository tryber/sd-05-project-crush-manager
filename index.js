const express = require('express');
const bodyParser = require('body-parser');
const { auth, error } = require('./middlewares');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_req, res) => {
  res.sendStatus(200);
});

app.post('/login', auth, (req, res) => {
  res.status(200).json(res.data); // token passado por 'data'
});

app.use(error);

app.listen(3000, () => {
  console.log('Online 3000!');
});
