
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
}