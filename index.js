const express = require('express');
const middlewares = require('./middlewares');
const app = express();

app.post('/login', middlewares.login);


// não remova esse endpoint, e para o avaliador funcionarr
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ON LINE!'));