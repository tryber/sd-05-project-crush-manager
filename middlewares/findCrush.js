const fs = require('fs').promises;

const readCrushs = async () => {
  const crushs = await fs.readFile('crush.json', 'utf-8', (err) => {
    if (err) throw console.log('Error Code');
  });
  return JSON.parse(crushs);
};

module.exports = async (req, res) => {
  const results = await readCrushs();
  const { id } = req.params;
  const filteredCrush = results.find((crush) => crush.id === Number(id));
  if (!filteredCrush) {
    res.status(404).send({ message: 'Crush não encontrado' });
  }
  res.status(200).send(filteredCrush);
};
