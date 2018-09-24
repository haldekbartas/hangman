import React, { Component } from 'react';
import Hangman from './Hangman'
import Word from './Word';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello there</h1>
        <Hangman></Hangman>
        <Word></Word>
      </div>
    );
  }
}

export default App;
