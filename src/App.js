import React from 'react';
import './App.css';
import Header from './components/Header';
import Instapaint from './components/Instapaint'
import TestModal from './components/TestModal'
import Like from './components/Like'


function App() {
  return (
    <body>
    <div className="App">
      
      <Header />
      <div className="containerApp">
        <div className="intro">
          <p className="pIntro">Sélectionnez le voyage de votre choix</p>
        </div>
        <div className="contentMain">
           <Instapaint />
         </div>
        </div>
    </div>
    </body>
  );
}

export default App;
