let Word = require("./word");
let inquirer = require("inquirer");
let randomWords = require("random-words");

class Game {
  constructor(game) {
    this.guesses = 12;
    this.score = 0;
    this.selectedWord = "";
    this.guessedLetters = [];
    this.startGame();
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
        this.selectedWord = new Word(randomWords());
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
        "\nGuessed Letters: " +
        this.guessedLetters
    );
  }

  playGame() {
    let guessed = this.guessedLetters;
    inquirer
      .prompt({
        type: "input",
        message: "Guess a letter! Any letter!",
        name: "guess",
        validate: function singleLetter(input) {
          if (input.length != 1 || guessed.includes(input)) {
            console.log(
              "\n Please enter a single letter that you have not yet guessed!"
            );
            return false;
          }
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
          this.guessedLetters = [];
          this.guesses = 12;
          this.selectedWord = new Word(randomWords());
          this.refreshPage();
          this.playGame();
        } else {
          console.log("Thanks for playing!");
        }
      });
  }
}

new Game();
