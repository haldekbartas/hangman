import React, { Component } from 'react';
import Hangman from './Hangman';
import Word from './Word';
import Alphabet from './Alphabet';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'apple',
      pickedLetters: ['a','e'],
      fails: 4
    };
  }

  onLetterPicked = (letter) => {
    this.setState( (prevState) => ({
      pickedLetters: prevState.pickedLetters.concat(letter)
      })
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hello there</h1>
        <Hangman fails={this.state.fails}></Hangman>
        <Word word={this.state.word}></Word>
        <Alphabet onLetterPicked={this.onLetterPicked} pickedLetters={this.state.pickedLetters}></Alphabet>
      </div>
    );
  }
}

export default App;
