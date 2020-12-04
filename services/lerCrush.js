const fs = require('fs');
const path = require('path');

const crushFile = async () => fs.readFileSync(
  path.join(__dirname, '../crush.json'),
  'utf8',
);

const lerCrush = async () => JSON.parse(await crushFile());


module.exports = { lerCrush };
