module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization && authorization.length === 16) return next();
  if (!authorization) {
    res.status(401).json({ message: 'Token inválido' });
  }
  if (authorization && authorization.length < 16) {
    res.status(401).json({ message: 'Token não encontrado' });
  }
};
