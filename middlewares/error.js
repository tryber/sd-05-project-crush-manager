module.exports = (err, res, _req, _next) => {
  const { status, message } = err;
  if (status) {
    return res.status(status).json({ message });
  }
  return res.status(500).json({ message: 'Something went wrong :(' });
};
