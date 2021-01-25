const errorHandler = (err, _req, _res, next) => {
  console.log('passei no erro handler');
  next(err);
};

module.exports = errorHandler;
