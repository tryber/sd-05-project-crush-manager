const fs = require('fs');

const readCrushFile = async () => {
  const crushList = await fs.readFileSync('crush.json', 'utf8');
  return JSON.parse(crushList);
};

const addCrushFile = async (currentCrushList, newCrush) => {
  const newCrushList = [...currentCrushList, newCrush];
  fs.writeFile('crush.json', newCrushList);
};

module.exports = {
  readCrushFile,
  addCrushFile,
};
