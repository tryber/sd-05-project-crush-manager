const fs = require('fs').promises;

const lerCrush = async () => {
  const crushList = await fs.readFile('./crush.json', 'utf-8');
  return JSON.parse(crushList);
};

module.exports = lerCrush;
