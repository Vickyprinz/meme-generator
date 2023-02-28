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
signin = (username, token) => {
  localStorage.setItem('token', token)
  this.setState({username}, () => {
    this.props.history.push('/memes')
  })
  signup = (username) => {
    this.setState({username})
  }

  signout = () => {
    this.setState({username: ''})
    localStorage.removeItem('token')
    this.props.history.push('/')
  }
}

export default App;
