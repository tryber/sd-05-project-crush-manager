const routsMiddleware = require('./routsMiddleware');
const errorHandler = require('./errorHandler');
const login = require('./login');
const checkToken = require('./checkToken');
const addCrush = require('./addCrush');
const getCrush = require('./getCrush');
const searchById = require('./searchById');
const editCrush = require('./editCrush');
const deleteCrush = require('./deleteCrush');
const queryCrush = require('./queryCrush');

module.exports = {
  routsMiddleware,
  errorHandler,
  login,
  checkToken,
  addCrush,
  getCrush,
  searchById,
  editCrush,
  deleteCrush,
  queryCrush,
};
