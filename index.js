const express = require('express');
const bodyParser = require('body-parser');
const crushRouter = require('./services/crushRouter');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
// app.get('/', (request, response) => {
//   response.send('teste');
// });

app.use('/', crushRouter);

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening @ port: ${PORT}`));
