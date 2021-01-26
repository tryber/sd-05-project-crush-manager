/*
consulta da expressão regular no site:
https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation?lq=1
*/

const validateEmail = (email) => {
  const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return reg.test(email.toString().toLowerCase());
};

const validatePassword = (password) => {
  const passwordString = password.toString();
  const passwordCheck = passwordString.length >= 6;
  return passwordCheck;
};

function validateDate(date) {
  // regExp fount @ https://www.regextester.com/99555
  const reg = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
  return reg.test(date.toString());
}

module.exports = {
  validateEmail,
  validatePassword,
  validateDate,
};
