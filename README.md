# Hangman-CLI

Oh, what a difference a few weeks can make. My first attempt at coding this game was not successful and was quite a frustrating experience. This time around, I was able to conquer the game and was surprised at how easy it was! This game will run in the terminal by calling the index.js sheet with node.

Quick video demo of the game:
[![Hangman Node CLI](http://img.youtube.com/vi/di5omJ8HaxE/0.jpg)](http://www.youtube.com/watch?v=di5omJ8HaxE "Hangman Node CLI")

### Classes, classes, classes!

I used classes to set up my letter, word, and game objects and I really enjoyed the process of setting things up. It was a great excercise in planning things out and then buidling up each required piece for the game (letter, word) and then using those pieces to string together the game logic.

### NPM packages

I was stoked on incorporating the randomWord package and it made setting up my game super easy because I no longer have to worry about creating an array with words or hooking up some API call to grab a random one. I find the NPM stuff incredibly powerful and very easy to work with.

### Future development

A few minor things that I noticed late in the process of making the game. Currently, the game will accept a number as a guess. Additionally, the guesses are decremented after every single guess whether the letter is in the word or not. Moving forward I would add validation to not accept numbers. And I would add logic to only decrement guesses if the letter guessed was _not_ in the word.
