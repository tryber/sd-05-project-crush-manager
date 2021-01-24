const logRouteIdMiddleware = (req, res, next) => {
  console.log('ID:');
  next();
};

module.exports = logRouteIdMiddleware;
