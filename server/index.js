const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');

const PORT = process.env.port || 3001;

const app = express();

// app.use(express.static(path.resolve(__dirname, 'client/build')));

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/results', (req, res) => {
  console.log('received');
  res.json({ message: 'results go here' });
});

app.post('/newData', function (req, res) {
  const inputNumber = req.body.input;

  console.log(inputNumber);

  res.status(200).json({ number: inputNumber });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
