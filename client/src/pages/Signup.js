
import React, { Component } from 'react';
import API from '../API'


class Signup extends Component {
    state = {
        username: '',
        password: ''
    }
    handleSubmit = (e) => {
        // API.signin(this.state)
        e.preventDefault()
        API.signup(this.state)
            .then(data => {
                if (data.error){
                    alert('not working!')
                }
                else {
                    // user is authentificated!
                    this.props.signup(this.state.username)
                    this.props.history.push('/signin')
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
    
                    <p className="h4 mb-4">Sign up</p>
    
                    <input 
                        name='username' 
                        id="defaultSignup" 
                        onChange={this.handleChange} 
                        value={this.state.username} 
                        className="form-control mb-4" 
                        placeholder="username" 
                    />
                    <input 
                        name='password' 
                        type='password'
                        id="defaultSignupPassword" 
                        onChange={this.handleChange} 
                        value={this.state.password} 
                        className="form-control mb-4" 
                        placeholder="Password" 
                    />
                      <button onClick={(e) => this.handleSubmit(e)} className="btn btn-info btn-block my-4" type="submit">Sign up</button>
    
    </form>
</div>

);
}
}