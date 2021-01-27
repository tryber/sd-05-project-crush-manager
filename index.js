const express = require('express');
const bodyParser = require('body-parser');
const { auth, crush, error } = require('./middlewares');

const loginController = require('./controllers/loginController');
const { getAllCrushs, getCrushById, createCrush, editCrushById, deleteCrush } = require('./controllers/crushController');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_req, res) => {
  res.sendStatus(200);
});

app.post('/login', loginController);

// validar token para ter acesso aos endpoints 'crush'
app.use(auth);

app.get('/crush', getAllCrushs);

app.get('/crush/:id', getCrushById);

app.post('/crush', crush, createCrush);

app.put('/crush/:id', crush, editCrushById);

app.delete('/crush/:id', deleteCrush);

app.use(error);

app.listen(3000, () => {
  console.log('Online 3000!');
});
