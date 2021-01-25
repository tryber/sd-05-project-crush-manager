const express = require('express');

const middlewares = require('../middlewares');

const crushRouter = express.Router();

crushRouter.get('/', (_req, res) => {
  res.send('teste');
});

crushRouter.post('/login', middlewares.login);

module.exports = crushRouter;

// https://
// app.betrybe.com/course/
// back-end/nodejs/express-http-with-nodejs/
// conteudos/middlewares-pattern?use_case=side_bar

// const rescue = require('express-rescue')
// const fs = require('fs').promises

// app.get('/:fileName', rescue(async (req, res) => {
//   const file = await fs.readFile('./fileName')
// }));
