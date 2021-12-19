import React from 'react';
import './App.css';
import T9Form from './components/T9Form';
import Results from './components/Results';

export default function App() {
  const loading = true;

  return (
    <div className='App'>
      <header className='App-header'>
        <T9Form />
        {loading ? console.log('results still loading') : <Results />}
      </header>
    </div>
  );
}
