const fs = require('fs').promises;

const readCrushit = async () => {
  const crushs = await fs.readFile('crush.json', 'utf-8', (err) => {
    if (err) throw console.log('Error Code Search');
  });
  return JSON.parse(crushs);
};

module.exports = async (req, res) => {
  const searchCrush = req.query.q;
  const crushList = await readCrushit();
  if (!searchCrush || searchCrush === '') return res.status(200).json(crushList);
  const results = crushList.filter((crush) => crush.name.includes(searchCrush));
  res.status(200).json(results);
};
