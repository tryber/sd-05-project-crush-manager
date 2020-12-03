// validacao de email retirado do repositorio
// https://github.com/tryber/sd-05-project-crush-manager/blob/renata-project-crush-manager/middleware/loginMid.js
module.exports = (req, res, next) => {
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const validarEmail = (mail) => regexEmail.test(String(mail).toLowerCase());

  // esta requisição body está vindo email no formato json
  // {
  //     "email": "email@email.com",
  //     "password": 123456
  // }
  const { email, password } = req.body;

  if (!email || email === '') {
    return res.status(400).json({
      message: 'O campo "email" é obrigatório',
    });
  }

  if (!validarEmail(email)) {
    return res.status(400).json({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }

  if (!password || password === '') {
    return res.status(400).json({
      message: 'O campo "password" é obrigatório',
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: 'A "senha" deve ter pelo menos 6 caracteres',
    });
  }

  return next();
};
