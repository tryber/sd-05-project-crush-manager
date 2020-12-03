const fs = require('fs');
const path = require('path');

const lerCrush = (dir) => {
  const crushFile = '../crush.json';
  console.log("Listando usuários...");
  fs.readFile(
    path.resolve(dir, '.', 'crush.json'), 'utf8', (err, data) => {
    console.log("teste", data)
    if (err) {
      console.error(`Não foi possível ler o arquivo ${crushFile}\n Erro: ${err}`);
      process.exit(1);
    }
    if (JSON.parse(data) === []) {
      return [];
    }
    return JSON.parse(data);
  });
}

const validarToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: 'Token não encontrado',
    });
  }

  if (authorization.length !== 16) {
    return res.status(401).json({
      message: 'Token inválido',
    });
  }
  next();
};

module.exports = { lerCrush, validarToken };
