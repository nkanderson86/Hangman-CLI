let Letter = require("./letter");

// after requiring the letter.js sheet to build my letters. I create a Word class to handle each word in the game.

//  Each word used in the game will be taken and set to lower case, the letters will be stored in an array, and the display will be used to actually show the current state of the word the user is trying to guess.
class Word {
  constructor(word) {
    this.word = word.toLowerCase();
    this.letters = [];
    this.display = "";
    this.constructLetters();
    this.updateDisplay();
  }

  //  splitting the word selected into lower case letters.  once each letter is sperated with the split function, I loop through the resulting array and call the letter class constructor for each of them.
  constructLetters() {
    this.letters = this.word.toLowerCase().split("");
    for (let i = 0; i < this.letters.length; i++) {
      if (this.letters[i] !== " ") {
        this.letters[i] = new Letter(this.letters[i]);
      }
    }
  }
  //   Now that I have my array of letter object, I want to call my letter.js sheet to return a letter for me to display in the terminal. I createa placeholder variable and then call the return letter method from my letter.js sheet for each letter in the word.  I then set the resulting string equal to my display.
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

  // method to take in a letter and call the checkGuess method from my letter.js sheet to see if the letter has been guessed and if it needs to be displayed or show up as a " - " I then call the updateDisplay method to rebuild the string with any updated letters that need to be revealed.
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
