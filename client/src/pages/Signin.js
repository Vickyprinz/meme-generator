

import React, { Component } from 'react';


import API from '../API'
class Signin extends Component {
    state = { 
        username: '',
        password: ''
     }
     handleSubmit = (e) => {
        // API.signin(this.state)
        e.preventDefault()
        API.signin(this.state)
            .then(data => {
                if (data.error){
                    alert("not working!")
                }
                else {
                    this.props.signin(this.state.username, data.token)
                }
            })
    }
    handleChange = e => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value})
    }
    render() { 
        return (  
            // <!-- Default form login -->
            <div>
                <form className="text-center border border-light p-5">
                    
                    <p className="h4 mb-4">Sign in</p>
                    <input 
                        name='username' 
                        id="defaultLoginFormEmail" 
                        onChange={this.handleChange} 
                        value={this.state.username} 
                        className="form-control mb-4" 
                        placeholder="username" 
                    />
                    <input 
                        name='password'
                        type='password' 
                        id="defaultLoginFormPassword" 
                        onChange={this.handleChange} 
                        value={this.state.password} 
                        className="form-control mb-4" 
                        placeholder="Password" 
                    />
       <button onClick={(e) => this.handleSubmit(e)}> Sign in </button>
                </form>
            </div>
          
        );
    }
}
export default Signin;

    