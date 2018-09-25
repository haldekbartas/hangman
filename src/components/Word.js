import React, { Component } from 'react';
import WordLetter from './WordLetter';

class Word extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this.fails = [];
    }

    onFail = (letter) => {
        if (this.props.pickedLetters.includes(letter)) {

        }
        else {
            console.log(letter.letter);
        }
    }

    render() {
        const { splittedWord, pickedLetters } = this.props;

        const wordLetterList = splittedWord.map((letter, index) => {
            if (pickedLetters.includes(letter)) {
                return <WordLetter key={index} letter={letter} ></WordLetter>
            }
            else {
                return <WordLetter key={index} letter=" " ></WordLetter>
            }
        });



        return (
            <div className="word" >
                <h1>WORD:</h1>
                <div className="word-letter-list-container">
                    {wordLetterList}
                </div>


            </div>
        )
    }
}

export default Word;