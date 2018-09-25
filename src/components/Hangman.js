import React, { Component } from 'react';
import hangmanSvg from '../assets/hangman.svg'

class Word extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {
        const { failsLeft } = this.props;

        return (
            <div className="hangmanClas" >
                   Fails left: {failsLeft}
                   <img className="hangman" src={hangmanSvg} alt="hangman logo" />
            </div>
        )
    }
}

export default Word;