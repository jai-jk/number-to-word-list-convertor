import React, { useReducer } from 'react';
import '../App.css';
import { OutlinedInput, Button } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';

export default function T9Form() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: '',
      email: '',
    }
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let data = { formInput };

    fetch('/data', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => console.log('Success:', JSON.stringify(response)))
      .catch((error) => console.error('Error:', error));
  };

  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  return (
    <div>
      <h1>T9 Number to Word List Convertor</h1>
      <form onSubmit={handleSubmit}>
        <OutlinedInput
          type='number'
          placeholder='Enter your number to convert!'
          className='text-field'
          required='true'
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
          onChange={handleInput}
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
      </form>
    </div>
  );
}
