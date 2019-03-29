let Word = require("./word");
let inquirer = require("inquirer");
let randomWords = require("random-words");

class Game {
  constructor(game) {
    this.guesses = 10;
    this.score = 0;
    this.selectedWord = randomWords();
    this.startGame();
    this.guessedLetters = [];
  }

  startGame() {
    inquirer
      .prompt({
        type: "input",
        message: "What is your name?",
        name: "player"
      })
      .then(answer => {
        console.log("Welcome to Hangman! You're up " + answer.player);
        this.selectedWord = new Word(this.selectedWord);
        this.refreshPage();
        this.playGame();
      });
  }

  refreshPage() {
    console.log(
      "\n" +
        this.selectedWord.updateDisplay() +
        "\n\nScore: " +
        this.score +
        "\nGuesses Remaining: " +
        this.guesses +
        "\n Guessed Letters: " +
        this.guessedLetters
    );
  }

  playGame() {
    inquirer
      .prompt({
        type: "input",
        message: "Guess a letter! Any letter!",
        name: "guess",
        validate: function singleLetter(input) {
          if (input.length != 1) {
            console.log("Please enter a single letter!");
            return false;
          }
          //   else if (this.guessedLetters.indexOf(input) !== -1) {
          //     console.log("You've already guessed that letter! Please try again");
          //     return false;
          //   }
          return true;
        }
      })
      .then(answer => {
        this.guessedLetters.push(answer.guess);
        this.selectedWord.guess(answer.guess);
        this.guesses--;
        this.refreshPage();
        if (this.selectedWord.word === this.selectedWord.display) {
          console.log(
            "Congratulations, your word was: " + this.selectedWord.word
          );
          this.score++;
          this.playAgain();
        } else if (this.guesses === 0) {
          console.log(
            "You've run out of gueses! Your word was: " + this.selectedWord.word
          );
          this.playAgain();
        } else {
          this.playGame();
        }
      });
  }

  playAgain() {
    inquirer
      .prompt({
        type: "confirm",
        message: "Would you like to play again?",
        name: "again"
      })
      .then(answer => {
        if (answer.again === true) {
          this.startGame();
        } else {
          console.log("Thanks for playing!");
        }
      });
  }
}

new Game();
