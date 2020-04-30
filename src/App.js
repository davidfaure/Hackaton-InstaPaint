import React from 'react';
import './App.css';
import Header from './components/Header';
import Instapaint from './components/Instapaint'
import TestModal from './components/TestModal'


function App() {
  return (
    <body>
    <div className="App">
      <Header />
      <Instapaint />
    </div>
    </body>
  );
}

export default App;
