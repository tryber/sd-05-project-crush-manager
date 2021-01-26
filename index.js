const express = require('express');
const bodyParser = require('body-parser');
const { auth, crush, error } = require('./middlewares');

const loginController = require('./controllers/loginController');
const { addCrush } = require('./controllers/crushController');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_req, res) => {
  res.sendStatus(200);
});

app.post('/login', loginController);

app.use(auth);

app.post('/crush', crush, addCrush);

app.use(error);

app.listen(3000, () => {
  console.log('Online 3000!');
});
