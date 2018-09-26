import React, { Component } from 'react';
import hangmanSvg from '../assets/hangman.svg'

class Word extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { failsLeft } = this.props;

        return (
            <div className="hangmanClas" >
                   <img className="hangman" src={hangmanSvg} alt="hangman logo" />
                   <div> Fails left: {failsLeft}    </div>
            </div>
        )
    }
}

export default Word;