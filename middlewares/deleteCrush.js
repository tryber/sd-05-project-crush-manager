const fs = require('fs').promises;

const readCrushe = async () => {
  const crushe = await fs.readFile('crush.json', 'utf-8', (err) => {
    if (err) throw console.log('Error Code');
  });
  return JSON.parse(crushe);
};

const writeCrushs = async (crush) => {
  fs.writeFile('crush.json', JSON.stringify(crush), (err) => {
    if (err) throw console.log(`Can't write ${err}`);
  });
};

module.exports = async (req, res) => {
  const results = await readCrushe();
  const id = Number(req.params.id);
  const filteredCrush = results.filter((crush) => crush.id !== id);

  await writeCrushs('./crush.json', filteredCrush);

  return res.status(200).json({ message: 'Crush deletado com sucesso' });
};
