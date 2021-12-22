const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const dictionaryModule = require('../utils/dictionary');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, 'client/build')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: PORT,
    credentials: true,
  })
);

const dictionary = dictionaryModule.dictionaryArray;

app.get('/*', (req, res) => {
  res.status(200);

  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

app.post('/numberSubmitted', function (req, res) {
  const inputNumber = req.body.input;
  const inputArray = Array.from(inputNumber.toString()).map(Number);

  const definedWords = [];
  const undefinedWords = [];

  const hashTable = [
    ' ',
    ',.?',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];

  const convertNumToWords = (inputArray, currIndex, convertedWord) => {
    if (currIndex === inputArray.length) {
      const newWord = convertedWord.join('');

      if (dictionary.includes(newWord)) {
        definedWords.push(newWord);
      } else {
        undefinedWords.push(newWord);
      }
      return;
    }

    for (let i = 0; i < hashTable[inputArray[currIndex]].length; i++) {
      convertedWord.push(hashTable[inputArray[currIndex]][i]);
      convertNumToWords(inputArray, currIndex + 1, convertedWord);

      convertedWord.pop();

      if (inputArray[currIndex] === 0 || inputArray[currIndex] === 1) {
        return;
      }
    }
  };

  const convertNumToWordsDecorator = (numbers) => {
    convertNumToWords(numbers, 0, []);
  };

  convertNumToWordsDecorator(inputArray);

  res.status(200).json({ definedWords, undefinedWords });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
