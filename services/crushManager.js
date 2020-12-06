const fs = require('fs').promises;

const lerCrush = async () => {
  const dataJSON = await fs.readFile('./crush.json', 'utf-8');
  const data = await (JSON.parse(dataJSON));
  const id = 1 + data.reduce((max, actual) =>
    (actual.id > max ? actual.id : max), 0);
  return { data, id };
};

const adicionaCrush = async (data) => {
  await fs.writeFile('./crush.json', JSON.stringify(data), 'utf-8', (err) => {
    if (err) {
      return console.log(err);
    }
  });
  return null;
};

module.exports = {
  adicionaCrush,
  lerCrush,
};
