const validateEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  const passwordRegex = /^.{6,}$/;
  return passwordRegex.test(password);
};

module.exports = { validateEmail, validatePassword };
