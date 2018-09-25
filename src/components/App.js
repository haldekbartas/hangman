import React, { Component } from 'react';
import Word from './Word';
import Alphabet from './Alphabet';
import hangmanSvg from '../assets/hangman.svg'
import hangmanLogo from '../assets/hangman-logo.svg'
import Hangman from './Hangman';

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      // word: wordFunction().split(''),
      word: 'apple',
      splittedWord: ['A', 'P', 'P', 'L', 'E'],
      pickedLetters: [],
      fails: 0,
      failsLeft: 5,
      correctCount: 0,
      correctLetters: [],
      failed: false,
      win: false,
    };
  }


  checkLetter = (letter) => {
    let prevState = Object.assign({}, this.state)
    prevState.pickedLetters = prevState.pickedLetters.concat(letter)

    if (this.state.splittedWord.includes(letter)) {
      prevState.correctCount++
    }
    else {
      prevState.fails++
      prevState.failsLeft--
    }

    prevState.failed = prevState.fails === 5
    prevState.win = prevState.correctLetters.length === prevState.correctCount

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
      pickedLetters: [],
      win: false,
      failed: false,
      fails: 0,
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
          <div className="play-button" onClick={this.playAgain}><a href="#game"> Another ticket?</a></div>
        </div>
      )
    }
    else if (this.state.failed) {
      return (
        <div className="App">
          <h1>
            Sorry. You hanged.
                     </h1>
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
