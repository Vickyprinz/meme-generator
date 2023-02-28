import React, {Component} from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'

import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Memes from './pages/Memes';
import API from './API';
import Dashboard from './pages/Dashboard'

class App extends Component {
  state = {
    username: '', 
    myMemes: []
  }
}

export default App;
