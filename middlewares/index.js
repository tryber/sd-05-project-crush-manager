const auth = require('./auth');
const criarCrush = require('./criarCrush');
const todosCrush = require('./todosCrush');
const editarCrush = require('./editarCrush');
const validarCrush = require('./validarCrush');
const deletaCrush = require('./deletaCrush');
const retornaCrush = require('./retornaCrush');
const loginValidator = require('./loginValidator');

module.exports = {
  auth,
  criarCrush,
  todosCrush,
  editarCrush,
  deletaCrush,
  validarCrush,
  retornaCrush,
  loginValidator,
};
