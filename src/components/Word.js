import React, { Component } from 'react';
import WordLetter from './WordLetter';

class Word extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.correctLetters = [];
    }


    componentWillMount = () =>{
        this.props.setCorrectLetters(this.correctLetters);
    }

    render() {
        const { splittedWord, pickedLetters } = this.props;

        const wordLetterList = splittedWord.map((letter, index) => {
                if(splittedWord.includes(letter)){
                    if(!this.correctLetters.includes(letter)){
                        this.correctLetters.push(letter);
                    }
                }
            if (pickedLetters.includes(letter)) {
                return <WordLetter key={index} letter={letter} ></WordLetter>
            }
            else {
                return <WordLetter key={index} letter=" " ></WordLetter>
            }

        });


        return (
            <div className="word" >
                <div className="word-letter-list-container">
                    {wordLetterList}
                </div>


            </div>
        )
    }
}

export default Word;