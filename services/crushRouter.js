const express = require('express');
const middlewares = require('../middlewares');

const crushRouter = express.Router();

crushRouter.get('/', middlewares.logRouteIdMiddleware, (req, res) => {
  res.send('rota com middleware');
});

module.exports = crushRouter;
