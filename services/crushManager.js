const fs = require('fs').promises;

const lerCrush = async () => {
  const crushList = await fs.readFile('./crush.json', 'utf-8');
  return JSON.parse(crushList);
};

const adicionaCrush = async (crush) => {
  fs.writeFile('crush.json', JSON.stringify(crush), (err) => {
    if (err) throw err;
  });
};

module.exports = {
  adicionaCrush,
  lerCrush,
};
