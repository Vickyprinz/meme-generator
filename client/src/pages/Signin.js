

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

    }