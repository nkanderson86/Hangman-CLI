class Letter {
  constructor(letter) {
    this.guessed = false;
    this.letter = letter;
  }
  checkGuess(guess) {
    if (guess === this.letter) {
      this.guessed = true;
    }
    return this.returnLetter();
  }

  returnLetter() {
    if (this.guessed) {
      return this.letter;
    } else {
      return " - ";
    }
  }
}

module.exports = Letter;
