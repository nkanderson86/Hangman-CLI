// Created a class to build each of my letter objects.  Each letter will have a boolean attribute called guessed and the value of the object will be the letter itself.

class Letter {
  constructor(letter) {
    this.guessed = false;
    this.letter = letter;
  }

  // Here I am passing the method a guess, which will be a letter.  I then set the boolean attribute of 'guessed' to true and call returnLetter method.
  checkGuess(guess) {
    if (guess === this.letter) {
      this.guessed = true;
    }
    return this.returnLetter();
  }

  // return letter checks to see if the letter has been guessed and will return the actual letter if that is the case.  Or if it has not been guessed, it will return a " - " which allows us to display the unguessed letters later.
  returnLetter() {
    if (this.guessed) {
      return this.letter;
    } else {
      return " - ";
    }
  }
}

module.exports = Letter;
