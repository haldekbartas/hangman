import React, { Component } from 'react';

class Hangman extends Component{
    render(){
        const { fails } = this.props;
        return(
            <div className="hangman">
                <p>Number of fails: {fails}</p>
            </div>
        )
    }
}

export default Hangman;