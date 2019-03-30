# Hangman-CLI

Oh, what a difference a few weeks can make! My first attempt at coding this game was not successful and was quite frustrating. This time around, I was able to conquer the game and was surprised at how easy it was! This game will run in the terminal by calling the index.js sheet with node.

Quick video demo of the game:
[![Hangman Node CLI](http://img.youtube.com/vi/di5omJ8HaxE/0.jpg)](http://www.youtube.com/watch?v=di5omJ8HaxE "Hangman Node CLI")

### Classes, classes, classes!

I used classes to set up my letter, word, and game objects and I really enjoyed the process of setting things up. It was a great excercise in planning things out and then buidling up each required piece for the game (letter, word) and then using those pieces to string together the game logic.

### NPM packages

NPM packages really do make a developer's life easier. In this case, I use the inquirer package to prompt the user for input. Additionally, I found a package that will return random words so I don't have to build a large word bank array. I'm able to simply call the package for a single word and plug it right into my game instance.

### Future development

A few minor things that I noticed late in the process of making the game. Currently, the game will accept a number as a guess. Additionally, the guesses are decremented after every single guess whether the letter is in the word or not. Moving forward I would add validation to not accept numbers. And I would add logic to only decrement guesses if the letter guessed was _not_ in the word and start the user off with less guesses.
