import React, {Component} from 'react';

class Meme extends Component {

    render() { 
        const {name, url} = this.props.meme
        return (   
            <div onClick={() => this.props.handleClick(this.props.meme)}>
                <h3>{name}</h3>
                <img crossOrigin="Anonymous" className="img" src={url} alt={name} role='presentation'/>  
            </div>
         );
    }
}
export default Meme;


