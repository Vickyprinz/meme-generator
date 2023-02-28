import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import MemesCollection from '../components/memes-collection';
import MemeForm from '../components/Meme-form'


class Memes extends Component {
    state = { 
        memes: [],
        selectedMeme: null,
        modalIsOpen: false,
        currentImgBase64: null
     }
     getMemesFromApi = () => {
        return fetch('https://api.imgflip.com/get_memes')
        .then(resp => resp.json())
        .then(data => this.setState({memes: data.data.memes.filter(meme => meme.box_count <= 2)}))
    
    }
    }
