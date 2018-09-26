import React, { Component } from 'react';
import Word from './Word';
import Alphabet from './Alphabet';
import hangmanSvg from '../assets/hangman.svg'
import hangmanLogo from '../assets/hangman-logo.svg'
import Hangman from './Hangman';
import randomWords from 'random-words'

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      splittedWord: randomWords().toUpperCase().split(''),
      pickedLetters: [],
      correctLetters: [],
      failsLeft: 10,
      correctCount: 0,
      win: undefined,
    };
  }


  checkLetter = (letter) => {
    let prevState = Object.assign({}, this.state)
    prevState.pickedLetters = prevState.pickedLetters.concat(letter)

    if (this.state.splittedWord.includes(letter)) {
      prevState.correctCount++
    }
    else {
      prevState.failsLeft--
    }

    if(prevState.failsLeft === 0){
      prevState.win = false;
    }
    else if (prevState.correctLetters.length === prevState.correctCount){
      prevState.win = true;
    }
    else{
      prevState.win = undefined;
    }

    this.setState(prevState)
  }

  setCorrectLetters = (correctLetters) => {
    this.setState(() => ({
      correctLetters: correctLetters
    })
    )
  }

  playAgain = () => {
    this.setState({
      splittedWord: randomWords().toUpperCase().split(''),
      pickedLetters: [],
      win: undefined,
      failsLeft: 10,
      correctCount: 0
    })
  }

  render() {
    if (this.state.win) {
      return (
        <div className="App">
          <h1>
            You won the jackpot on lottery called life.
                    </h1>
            <h2>Word '{this.state.splittedWord}'' bringed you good luck.</h2>
          <div className="play-button" onClick={this.playAgain}><a href="#game"> Another ticket?</a></div>
        </div>
      )
    }
    else if (this.state.win == false) {
      return (
        <div className="App">
          <h1>
            Sorry. You hanged.
          </h1>
          <h2>Word '{this.state.splittedWord}'' was your executor.</h2>
          <div className="play-button" onClick={this.playAgain}><a href="#game">Die again?</a></div>
        </div>
      )
    }
    else {
      return (
        <div className="App" ref={this.myRef}>
          <div className="hero">
            <img className="hangman-logo" src={hangmanLogo} alt="hangman logo" />
            <div className="play-button"><a href="#game">Play it cool.</a></div>
          </div>
          <div className="game" id="game">
            <Hangman failsLeft={this.state.failsLeft}></Hangman>
            {/* <img className="hangman" src={hangmanSvg} alt="hangman logo" /> */}
            <Word setCorrectLetters={this.setCorrectLetters} splittedWord={this.state.splittedWord} pickedLetters={this.state.pickedLetters}></Word>
            <Alphabet checkWin={this.checkWin} checkLose={this.checkLose} checkLetter={this.checkLetter} pickedLetters={this.state.pickedLetters}></Alphabet>

          </div>


        </div>
      )
    }
  }
}

export default App;
