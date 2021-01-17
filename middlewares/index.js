const login = require('./login');
const auth = require('./auth');
const createCrush = require('./createCrush');
// const { readJSON } = require('../services/allCrush');
const list = require('./list');
const { incrementJSON } = require('../services/allCrush');
const crushIdFind = require('./crushIdFind');
const updateCrush = require('./updateCrush');

module.exports = {
  login,
  auth,
  createCrush,
  list,
  incrementJSON,
  crushIdFind,
  updateCrush,
  // readJSON,
};
