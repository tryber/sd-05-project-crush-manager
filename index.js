const express = require('express');
// const loginRoute = require('./middlewares');
const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/login', loginRoute);