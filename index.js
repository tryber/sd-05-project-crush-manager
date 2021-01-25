const bodyParser = require('body-parser');

const express = require('express');

const rotaIndex = require('./rotaIndex');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

// const validaToken = require('./')

app.use('/login', rotaIndex);
// não remova esse endpoint, e para o avaliador funcionar

app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT, () => console.log('O dono tá on!'));
