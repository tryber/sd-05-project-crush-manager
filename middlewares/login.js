const crypto = require('crypto');
const generateToken = () => crypto.randomBytes(8).toString('hex');

module.exports = (_req, res) => {
    const token = generateToken();
    return res.status(200).send({ token });
};
