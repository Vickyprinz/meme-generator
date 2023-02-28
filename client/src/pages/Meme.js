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
    componentDidMount() {
        this.getMemesFromApi()
    }
    toggleModal = (selectedMeme) => {
        const image = selectedMeme.url
        const base_image = new Image()
        base_image.src = image
        const base64 = this.getBase64Image(base_image)
        this.setState({
            modalIsOpen: !this.state.modalIsOpen, 
            selectedMeme: selectedMeme,
            currentImgBase64: base64
        })
    }
    getBase64Image = (img) => {
        let canvas = document.createElement("canvas");
        canvas.width = 400;
        canvas.height = 400;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        let dataURL = canvas.toDataURL('image/png', 0.5);
        return dataURL;
   
    }
