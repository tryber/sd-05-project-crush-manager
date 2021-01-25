const express = require('express');

const middlewares = require('../middlewares');

const crushRouter = express.Router();

crushRouter.get('/:id', middlewares.routsMiddleware, middlewares.errorHandler, (req, res) => {
  res.send('ho ho ho');
});
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
