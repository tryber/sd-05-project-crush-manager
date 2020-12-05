const fs = require('fs').promises;

const lerCrush = async () => {
  const crushs = await fs.readFile('crush.json', 'utf-8', (err) => {
    if (err) throw console.log('não dá mais');
  });
  return JSON.parse(crushs);
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
