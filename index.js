let Word = require("./word");
let inquirer = require("inquirer");
let randomWords = require("random-words");

// setting up a Game class to call to start each instance of the game.  I delcare a few variables that will be updated as the user players.  I also set up a variable to store the selected word and an array to hold gussed letters.
class Game {
  constructor(game) {
    this.guesses = 12;
    this.score = 0;
    this.selectedWord = "";
    this.guessedLetters = [];
    this.startGame();
  }

  // grab name from user. then, i set the selected word equal to a random word thanks to the npm package I found that will serve up random words without an array to pull from. I call the refreshPage method and the playGame method to get the gameplay rolling.
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

  // method to console.log everything the user needs to see to play the game
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

  // grab a letter from the user, validate that it is a single char and it hasn't been guessed yet. then I take that guess and psuh it to my guessedLetters array and call the guess method from my word.js sheet.  at the end of this method I check for win/loss conditions and if neither are met I recursivley call the playGame method until one is met.
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

  // simple function to check with the user on if they would like to play again.  Resets the variables for the new game if they choose yes.
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
