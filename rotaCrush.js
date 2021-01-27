// consultado repo Carla Nakajuni para entender estrutura

const express = require('express');

const router = express.Router();

const fs = require('fs').promises;

const moment = require('moment');

const path = require('path');

const writeCrushFile = async (content) =>
  fs.writeFile(
    path.resolve(__dirname, '.', 'crush.json'),
    JSON.stringify(content),
    (err) => {
      if (err) throw err;
    },
  );

const readCrushFile = async () => {
  const content = await fs.readFile(path.resolve(__dirname, '.', 'crush.json'));
  return JSON.parse(content.toString('utf-8'));
};

router.post('/', async (req, res) => {
  const { name, age, date } = req.body;
  console.log(req.body);
  if (!name) {
    res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    res
      .status(400)
      .json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  if (!age) {
    res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (Number(age) < 18) {
    res.status(400).json({ message: 'O crush deve ser maior de idade' });
  }
  if (!date || !date.datedAt || !date.rate) {
    res.status(400).json({
      message:
        'O campo "date" é obrigatório e "datedAt" e "rate" não podem ser vazios',
    });
  }
  if (!moment(date.datedAt, 'DD/MM/AAAA').isValid()) {
    res
      .status(400)
      .json({ message: 'O campo "datedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  if (Number(date.rate) < 1 || Number(date.rate) > 5) {
    res
      .status(400)
      .json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  const exCrush = await readCrushFile();
  const id = exCrush.length + 1;
  const { datedAt, rate } = date;
  const newArrayOfCrush = [
    ...exCrush,
    {
      id,
      name,
      age,
      date: {
        datedAt,
        rate,
      },
    },
  ];

  await writeCrushFile(newArrayOfCrush);
  res.status(201).json(newArrayOfCrush[id - 1]);
});

router.get('/', async (_req, res) => {
  const crush = await readCrushFile();
  res.status(200).send(crush);
});

/* router.get('/:id', async (req, res) => {
  const crush = await readCrushFile();
  const { id } = req.params.id;
  const caracterFiltrado = crush.find((character) => character.id === id) || [];
  res.status(200).send(caracterFiltrado);
}); */

// desafio 2 quebrou nas 2 validações que estão no validaToken

// devo unificar rotaCrush com validaToken? - ok (vlw Hugão!)

module.exports = router;
