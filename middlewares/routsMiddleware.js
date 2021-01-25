const rescue = require('express-rescue');

const routsMiddleware = rescue(async (req, res) => {
  const user = await req.params.id;
  if (!user) {
    throw new Error();
  }
  // const user = false;
  res.status(200).json(user);
});

module.exports = routsMiddleware;
