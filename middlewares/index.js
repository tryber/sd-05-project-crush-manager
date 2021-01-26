const routsMiddleware = require('./routsMiddleware');
const errorHandler = require('./errorHandler');
const login = require('./login');
const checkToken = require('./checkToken');
const addCrush = require('./addCrush');

module.exports = {
  routsMiddleware,
  errorHandler,
  login,
  checkToken,
  addCrush,
};
