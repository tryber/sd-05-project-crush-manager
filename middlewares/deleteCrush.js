const fileSystem = require('../services/fileSystem');
// const validate = require('../services/validate');

const deleteCrush = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const file = await fileSystem.readCrushPromise('./crush.json');
    const list = JSON.parse(file);
    const newList = list.filter((crush) => crush.id !== id);
    await fileSystem.editCrushPromise('./crush.json', newList);
    return res.status(200).json({ message: 'Crush deletado com sucesso' });
  } catch (error) {
    console.error(`Erro ao ler arquivos: ${error.message}`);
  }
};

module.exports = deleteCrush;
