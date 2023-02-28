import React, {Component} from 'react';

class CustomisedMeme extends Component {

    render() { 
        const {name, url} = this.props.meme
        return (   
            <div>
                <h3>{name}</h3>
                <img src={url} alt={name}></img>
            </div>
         );
    }
}
 
 
export default CustomisedMeme;