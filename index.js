const express = require('express');

const crushRouter = require('./services/crushRouter');

const app = express();
app.use('/', crushRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

const PORT = 3000;
app.listen(PORT, console.log(`Listening @ port: ${PORT}`));
