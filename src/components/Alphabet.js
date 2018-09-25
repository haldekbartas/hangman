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
        event.target.style.display = "none";
        this.props.onLetterPicked(letter.letter)
        this.props.onFail(letter.letter);
    }

    render() {
        const { pickedLetters } = this.props;
        const letterList = this.alphabet.map((letter, index) => {
            return (
                <AlphaLetter letter={letter} key={index} onClick={this.handleClick}></AlphaLetter>
            )
        });


        return (
            <div className="alphabet">
                <h1>Alphabet:</h1>
                <div>picked letters: {pickedLetters}</div>
                <div className="letter-list-container">
                    {letterList}
                </div>

            </div>
        )
    }
}

export default Alphabet;