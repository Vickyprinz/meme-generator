import React, {Component} from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'

import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Memes from './pages/Memes';
import API from './API';
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
