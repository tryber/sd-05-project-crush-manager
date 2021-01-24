// const Joi = require('@hapi/joi');
const generateToken = require('../auth/generate-token');

/* const LOGIN_SCHEMA = Joi.object({
  email: Joi.string().email()
    .required(),
  password: Joi.string().min(3)
    .max(64)
    .required(),
}); */

/* const loginValidate = (req, _res, next) => {
  const { error } = LOGIN_SCHEMA.validate(req.query);
  if (error) next(error);
  req.data = { token: generateToken() };
  next();
}; */

const validateEmail = (email) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};

const loginValidate = (req, res, next) => {
  const { email, password } = req.body;
  if (email === '') res.status(400).json({ message: 'O campo "email" é obrigatório' });
  if (!validateEmail(email)) res.status(400).json({ message: 'O campo "email" é obrigatório' });
  if (!validateEmail(email)) res.status(400).json({ message: 'O campo "email" é obrigatório' });
  next();
};

module.exports = { loginValidate };
