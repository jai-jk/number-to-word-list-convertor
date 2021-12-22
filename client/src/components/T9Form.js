import React, { useState } from 'react';
import axios from 'axios';

import '../App.css';
import { ResultsModal } from './ResultsModal';

import { OutlinedInput, Button } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';

export const T9Form = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputNumber = { input };

    axios
      .post('/numberSubmitted', inputNumber)
      .then((response) => setResult(response.data))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <OutlinedInput
          name='inputNumber'
          type='number'
          className='text-field'
          required={true}
          inputProps={{
            style: {
              width: '900px',
              textAlign: 'center',
              fontFamily: "'Lato', sans-serif",
              color: '#70163c',
              fontSize: '140%',
              fontWeight: 'bold',
            },
          }}
          value={input}
          placeholder='Enter your number to convert!'
          onChange={(event) => setInput(event.target.value)}
        />
        <br></br>
        <Button
          className='submit-button'
          type='submit'
          variant='contained'
          style={{
            marginTop: '2%',
            width: '900px',
            backgroundColor: '#70163c',
            color: '#307351',
            fontSize: '80%',
            fontWeight: 'bold',
          }}
        >
          Convert
          <TranslateIcon style={{ marginLeft: '2%' }} />
        </Button>
        {result === null ? null : <ResultsModal data={result} />}
      </form>
    </div>
  );
};
