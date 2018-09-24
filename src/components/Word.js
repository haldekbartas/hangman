import React, { Component } from 'react';

class Word extends Component{
    render(){
        const {word} = this.props;
        return(
            <div className="word">
               <h1>WORD:</h1>
               <h1>{word}</h1>
               

            </div>
        )
    }
}

export default Word;