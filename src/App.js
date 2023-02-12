import React from 'react';

import Navbar from './components/Navbar/Navbar'
import './components/Navbar/Navbar.scss'

import Header from './container/Header/Header'
import './container/Header/Header.scss'

import About from './container/About/About'
import './container/About/About.scss';

import './App.scss';



function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
    
    </div>

  );
}

export default App;
