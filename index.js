const express = require('express');
const bodyParser = require('body-parser');

const { userLog } = require('./middlewares/userValidation');
const { getToken } = require('./middlewares/getToken');
const { crushValidation } = require('./middlewares/crushValidation');
const { createCrush } = require('./controller/createCrush');
const { getCrushById, getCrushs, deleteCrush } = require('./controller/crushController');

const app = express();
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send();
});
// requisito 1
app.post('/login', userLog);

// requisito 2
app.post('/crush', getToken, crushValidation, createCrush);

// requisito 3
app.get('/crush', getToken, getCrushs);

// requisito 4
app.get('/crush/:id', getToken, getCrushById);

// requisito 5
app.put('/crush/:id', getToken, crushValidation);

// requisito 6
app.delete('crush/:id', getToken, deleteCrush);

// requisito7
app.get('/crush/search?q=searchTerm');


app.listen(3000, () => console.log('Listening on 3000'));
