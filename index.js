const express = require('express');

const bodyParser = require('body-parser');

const rotaIndex = require('./rotaIndex');

const validaToken = require('./validaToken');

const rotaCrush = require('./rotaCrush');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use('/crush', validaToken, rotaCrush);

app.use('/login', rotaIndex);

// não remova esse endpoint, e para o avaliador funcionar

app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT, () => console.log('O dono tá on!'));
