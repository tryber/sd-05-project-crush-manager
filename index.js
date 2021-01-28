const express = require('express');
const bodyParser = require('body-parser');
const authToken = require('./middlewares/login');
const loginRoute = require('./middlewares/login');
const addCrush = require('./middlewares/login');
const registeredCrushes = require('./middlewares/login');
const findCrush = require('./middlewares/login');
const editCrush = require('./middlewares/login');
const deleteCrush = require('./middlewares/login');
const crushSearch = require('./middlewares/login');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/login', loginRoute);
app.get('/crush/search?q=searchTerm', authToken, crushSearch);
app.post('/crush', authToken, addCrush);
app.get('/crush', authToken, registeredCrushes);
app.get('/crush/:id', authToken, findCrush);
app.put('/crush/:id', authToken, editCrush);
app.delete('/crush/:id', authToken, deleteCrush);

app.listen(3000, () => console.log('Ding Ding Dong'));
