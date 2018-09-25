import React, { Component } from 'react';
import AlphaLetter from './AlphaLetter'
class Alphabet extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.alphabet = new Array(26).fill(1).map((_, i) => String.fromCharCode(65 + i));
    }

    handleClick = (event, letter) => {
        event.persist();
        event.target.disabled = true;
        this.props.checkLetter(letter.letter);
    }

    render() {
        const letterList = this.alphabet.map((letter, index) => {
            return (
                <AlphaLetter letter={letter} key={index} onClick={this.handleClick}></AlphaLetter>
            )
        });


        return (
            <div className="alphabet">
                <div className="letter-list-container">
                    {letterList}
                </div>

            </div>
        )
    }
}

export default Alphabet;