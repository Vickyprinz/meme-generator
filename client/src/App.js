import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Memes from './pages/Meme';
import API from './API';
import Dashboard from './pages/Dashboard'


class App extends Component {
  state = {
    username: '', 
    myMemes: []
  }

  signin = (username, token) => {
    localStorage.setItem('token', token)
    this.setState({username}, () => {
      this.props.history.push('/memes')
    })
  }

  signup = (username) => {
    this.setState({username})
  }

  signout = () => {
    this.setState({username: ''})
    localStorage.removeItem('token')
    this.props.history.push('/')
  }

  addToMyMemes = (newMeme) => {
    this.setState({myMemes: [...this.state.myMemes, newMeme]})
  }

  addManyToMyMemes = (newMemes) => {
    this.setState({myMemes: [...this.state.myMemes, ...newMemes]})
  }
   
  componentDidMount() {
    API.validate()
      .then(data => {
        if (data.error){
          this.props.history.push('/')
        }
        else {
          this.signin(data.username, localStorage.getItem('token'))
          API.getDashboard()
          .then(data => {
              if(data.error) {
                  alert("You don't have any memes!")
              } else {
                  this.addManyToMyMemes(data)
              }
        })
        
      }
    })
  }

  render() {
    const {username, myMemes} = this.state
    const {signin, signup, signout, addManyToMyMemes} = this
    return (
      <div className="App">
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signin' component={props => <Signin {...props} signin={signin}/>} />
            <Route exact path='/signup' component={props => <Signup {...props} signup={signup}/>} />
            <Route exact path='/dashboard' component={props => <Dashboard {...props} username={username} signout={signout} myMemes={myMemes} addManyToMyMemes={addManyToMyMemes}/>}/>
            <Route exact path='/memes'  component={props => <Memes {...props} username={username} signout={signout} addToMyMemes={this.addToMyMemes}/>}/>
            <Route component={() => <h1>Page not found.</h1>} />
          </Switch>
        </div>
      </div>
    );
  }
  
}

export default withRouter(App);