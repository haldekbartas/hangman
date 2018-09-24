import React, { Component } from 'react';
import Hangman from './Hangman';
import Word from './Word';
import Alphabet from './Alphabet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello there</h1>
        <Hangman></Hangman>
        <Word></Word>
        <Alphabet></Alphabet>
      </div>
    );
  }
}

export default App;
