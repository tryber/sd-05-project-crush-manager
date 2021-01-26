const fileSystem = require('fs');

function readCrushPromise(file) {
  return new Promise((resolve, reject) => {
    fileSystem.readFile(file, 'utf-8', (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

function writeCrushPromise(file, list, name, age, date) {
  const id = list.length + 1;
  const newCrush = { id, name, age, date };
  list.push(newCrush);
  const listJSON = JSON.stringify(list);
  return new Promise((resolve, reject) => {
    fileSystem.writeFile(file, listJSON, (err) => {
      if (err) return reject(err);
      return resolve(newCrush);
    });
  });
}

module.exports = {
  readCrushPromise,
  writeCrushPromise,
};
