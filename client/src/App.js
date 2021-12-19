import React from 'react';
import './App.css';
import { OutlinedInput, Button } from '@mui/material';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>T9 Number to Word List Convertor</h1>
        <h2>Enter your number below to convert!</h2>
        <OutlinedInput
          type='tel'
          className='text-field'
          required='true'
          inputProps={{
            style: {
              textAlign: 'center',
              fontFamily: "'Lato', sans-serif",
              color: '#70163c',
              fontSize: '140%',
              fontWeight: 'bold',
            },
          }}
        />
        <Button
          className='submit-button'
          variant='contained'
          style={{
            marginTop: '2%',
            width: '50%',
            backgroundColor: '#70163c',
            color: '#307351',
            fontSize: '80%',
            fontWeight: 'bold',
          }}
        >
          Submit
        </Button>
        {/* <p>{!data ? 'Loading...' : data}</p> */}
      </header>
    </div>
  );
}

export default App;
