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
    }
