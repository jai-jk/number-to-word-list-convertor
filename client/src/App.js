import React from 'react';
import './App.css';
import icon from './icon.svg';
import T9Form from './components/T9Form';
import Results from './components/Results';

export default function App() {
  const loading = true;

  return (
    <div className='App'>
      <header className='App-header'>
        <p style={{ color: 'white' }}>Follow the phone down ;)</p>
        <h1>
          <img src={icon} alt='brick phone' />
          TranslaT9r
        </h1>
        <h4 style={{ marginTop: '1%' }}>
          Give us your T9 Number, and we'll give you a list of all the possible
          words you could make!
        </h4>
        <T9Form />
        {loading ? console.log('results still loading') : <Results />}
        <p style={{ color: 'black', fontWeight: 'bold', fontSize: '85%' }}>
          © Jai Jalah 2021
        </p>
      </header>
    </div>
  );
}
