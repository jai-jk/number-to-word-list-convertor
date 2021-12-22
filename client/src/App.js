import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { T9Form } from './components/T9Form';

export default function App() {
  return (
    <div className='app-container'>
      <Header />
      <T9Form />
      <Footer />
    </div>
  );
}
