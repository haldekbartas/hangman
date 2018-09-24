import React, { Component } from 'react';
import AlphaLetter from './AlphaLetter'
class Alphabet extends Component {
    state = {
        alphabetArray: []
    }
    render() {
        const alphabetArray = new Array( 26 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 65 + i ) );
        const letterList = alphabetArray.map(letter =>{
            return (
                <AlphaLetter letter={letter} key={letter}></AlphaLetter>
            )
        })
        return (
            <div className="alphabet">
                <h1>Alphabet:</h1>
                <div className="letter-list-container">
                {letterList}
                </div>
                
            </div>
        )
    }
}

export default Alphabet;