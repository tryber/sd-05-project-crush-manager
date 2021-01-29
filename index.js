const express = require('express');
const bodyParser = require('body-parser');
const authToken = require('./middlewares/authToken');
const loginRoute = require('./middlewares/login');
const addCrush = require('./middlewares/addCrush');
const registeredCrushes = require('./middlewares/registeredCrushes');
const findCrush = require('./middlewares/findCrush');
const editCrush = require('./middlewares/editCrush');
const deleteCrush = require('./middlewares/deleteCrush');
const crushSearch = require('./middlewares/crushSearch');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/login', loginRoute);
app.get('/crush/search', authToken, crushSearch);
app.post('/crush', authToken, addCrush);
app.get('/crush', authToken, registeredCrushes);
app.get('/crush/:id', authToken, findCrush);
app.put('/crush/:id', authToken, editCrush);
app.delete('/crush/:id', authToken, deleteCrush);

app.listen(3000, () => console.log('Ding Ding Dong'));
