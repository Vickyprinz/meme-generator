class API {
    static baseUrl = 'http://localhost:3001' 
    static signinUrl = API.baseUrl + '/signin'
    static signupUrl = API.baseUrl + '/signup'
    static validateUrl = API.baseUrl + '/validate'
    static dashboardUrl = API.baseUrl + '/dashboard'
    static myMemes = API.baseUrl + '/customised_memes'
 
    static signin (user) {
     return fetch(this.signinUrl, {
         method: "POST",
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(user)
     }).then(resp => resp.json())
 
    }
    static signup (user) {
        return fetch(this.signupUrl, {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then(resp => resp.json())
       }
       static validate () {
        const token = localStorage.getItem('token') 
        return fetch(this.validateUrl, {
         headers: { Authorization: token }
     }).then(resp => resp.json())
    }
    static getDashboard () {
        return fetch(this.dashboardUrl, {
            headers: {Authorization: localStorage.getItem('token')}
        }).then(resp => resp.json())
    }

    static createMeme (myMeme) {
        return fetch(this.myMemes, {
         method: "POST",
         headers: { "Content-Type": "application/json",
         Authorization: localStorage.getItem('token') },
         body: JSON.stringify(myMeme)
       }).then(resp => resp.json())
     }
 }
 
 export default API
 