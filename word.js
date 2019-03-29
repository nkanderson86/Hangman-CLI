let Letter = require("./letter");

class Word {
  constructor(word) {
    this.word = word.toLowerCase();
    this.letters = [];
    this.display = "";
    this.constructLetters();
    this.updateDisplay();
  }

  constructLetters() {
    this.letters = this.word.toLowerCase().split("");
    for (let i = 0; i < this.letters.length; i++) {
      if (this.letters[i] !== " ") {
        this.letters[i] = new Letter(this.letters[i]);
      }
    }
  }

  updateDisplay() {
    let placeholder = "";
    this.letters.forEach(ltr => {
      if (ltr !== " ") {
        placeholder += ltr.returnLetter();
      } else {
        placeholder += " ";
      }
    });
    this.display = placeholder;
    return this.display;
  }

  guess(ltr) {
    for (let i = 0; i < this.letters.length; i++) {
      if (this.letters[i] !== " ") {
        this.letters[i].checkGuess(ltr.toLowerCase());
      }
    }
    return this.updateDisplay();
  }
}

module.exports = Word;
