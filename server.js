const express = require('express');
const app = express();
const port = 8070;

app.use(express.json());

// Handler pentru adunare
app.post('/add', (req, res) => {
  const { first, second, three } = req.body;
  if (isNaN(first) || isNaN(second) || isNaN(three)) {
    res.status(400).json({ message: 'Parametrii trebuie să fie numere' });
  } else {
    const result = first + second + three;
    res.status(200).json({ result });
  }
});

// Handler pentru scădere
app.post('/subtract', (req, res) => {
  const { first, second, three } = req.body;
  if (isNaN(first) || isNaN(second) || isNaN(three)) {
    res.status(400).json({ message: 'Parametrii trebuie să fie numere' });
  } else {
    const result = first - second - three;
    res.status(200).json({ result });
  }
});

// Handler pentru înmulțire
app.post('/multiply', (req, res) => {
  const { first, second, three } = req.body;
  if (isNaN(first) || isNaN(second) || isNaN(three)) {
    res.status(400).json({ message: 'Parametrii trebuie să fie numere' });
  } else {
    const result = first * second * three;
    res.status(200).json({ result });
  }
});

// Handler pentru împărțire
app.post('/divide', (req, res) => {
  const { first, second, three } = req.body;
  if (isNaN(first) || isNaN(second) || isNaN(three)) {
    res.status(400).json({ message: 'Parametrii trebuie să fie numere' });
  } else if (second === 0) {
    res.status(400).json({ message: 'Împărțirea la zero nu este permisă' });
  } else {
    const result = first / second / three;
    res.status(200).json({ result });
  }
});

app.listen(port, () => {
  console.log(`Serverul rulează pe portul ${port}`);
});
