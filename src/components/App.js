import React, { Component } from 'react';
import Hangman from './Hangman';
import Word from './Word';
import Alphabet from './Alphabet';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'APPLE',
      splittedWord: [],
      pickedLetters: [],
      fails: 0
    };
  }

  componentDidMount = () => {
    this.setState({
      splittedWord: this.state.word.split('')
    })
  }

  onFail = (letter) => {
    if (this.state.splittedWord.includes(letter)) {
      console.log('zawiera litere', letter);
    }
    else {
      this.setState({
        fails: this.state.fails + 1
      })
    }
  }

  onLetterPicked = (letter) => {
    this.setState((prevState) => ({
      pickedLetters: prevState.pickedLetters.concat(letter)
    })
    )
  }



  render() {
    return (
      <div className="App">
        <h1>Hello there</h1>
        <Hangman fails={this.state.fails}></Hangman>
        <Word onFail={this.onFail} splittedWord={this.state.splittedWord} pickedLetters={this.state.pickedLetters}></Word>
        <Alphabet onFail={this.onFail} onLetterPicked={this.onLetterPicked} pickedLetters={this.state.pickedLetters}></Alphabet>
      </div>
    );
  }
}

export default App;
