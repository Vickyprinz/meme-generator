
import React, { Component } from 'react';

import CustomisedMeme from '../components/CustomisedMeme'
import NavBar from '../components/NavBar'
import API from '../API'


class Dashboard extends Component {
    render() { 
        const {myMemes} = this.props

        const meme = myMemes.map(meme => (
        <CustomisedMeme 
            key={meme.id} 
            meme={meme}
        />))
        return (
            <div>
                <NavBar/>
                <h1>My memes</h1>
                <div className= 'memeCollection'> {meme} </div>            
            </div> 
         );
    }
}
export default Dashboard;
