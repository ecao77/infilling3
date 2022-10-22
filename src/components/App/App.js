import React from 'react';
import './App.css';
import logo from '../../pen.png'

import Pokeapi from '../../util/Pokeapi.js'

function App() {
  return (
    <div className="App">
      <div className="App-navbar">

        <div className = "Navbar-logo"> 
          <div className = "Navbar-title" >
            Website Title
          </div>
          <img src = {logo}/>
        </div>

        <div className = "Navbar-pages">
          <div className = "Navbar-about" >
            About
          </div>
          <div className = "Navbar-editor" >
            Editor
          </div>
        </div>
      </div>

      <div className = "App-hero">
        writing, simplified.
      </div>

      <Pokeapi />

    </div>
  );
}

export default App;
