const fs = require('fs');

const readCrushFile = async () => {
  const crushList = await fs.readFileSync('./crush.json', 'utf8', (err) => {
    if (err) throw new Error(err);
    console.log('File has been read!');
  });
  return JSON.parse(crushList);
};

const addCrushFile = async (currentCrushList, newCrush) => {
  const newCrushList = [...currentCrushList, newCrush];
  fs.writeFile('./crush.json', JSON.stringify(newCrushList), (err) => {
    if (err) throw new Error(err);
    console.log('File has been saved!');
  });
};

module.exports = {
  readCrushFile,
  addCrushFile,
};
