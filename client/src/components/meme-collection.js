import React, {Component} from 'react';

import Meme from './Meme'

class MemesCollection extends Component {
    render() { 
        const {memes} = this.props
        const meme = memes.map(meme => (
          <Meme 
            key={meme.id} 
            meme={meme}
            handleClick={this.props.handleClick}
          />))
}
}