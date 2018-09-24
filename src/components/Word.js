import React, { Component } from 'react';

class Word extends Component{
    state = {
        word: 'apple'
    }
    render(){
        return(
            <div className="word">
               <h1>WORD:</h1>
               <h1>{this.state.word}</h1>
               

            </div>
        )
    }
}

export default Word;