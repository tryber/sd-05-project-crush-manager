module.exports = (req, res, next) => {
  if (!req.headers.authorization) return next({ status: 401, message: 'Token não encontrado' });
  if (req.headers.authorization.length !== 16) return next({ status: 401, message: 'Token inválido' });
  return next();
};
