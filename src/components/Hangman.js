import React, { Component } from 'react';

class Hangman extends Component{
    state = {
        fails: 3,
    }
    render(){
        return(
            <div className="hangman">
                <p>Number of fails: {this.state.fails}</p>
            </div>
        )
    }
}

export default Hangman;