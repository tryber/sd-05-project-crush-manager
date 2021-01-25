const express = require('express');

const app = express();

const rotaIndex = require('./rotaIndex');

// const validaToken = require('./')

app.use('/login', rotaIndex);
// não remova esse endpoint, e para o avaliador funcionar

app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('O dono tá on!'));

const bodyParser = require('body-parser');

app.use(bodyParser.json());
