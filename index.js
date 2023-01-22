const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/facts/dog', async (req, res) => {
  const facts = await fetch('https://some-random-api.ml/facts/dog').then(response => response.json());
  res.json(facts);
});

app.listen(3000, () => {
  console.log('API listening on port 3000');
});
