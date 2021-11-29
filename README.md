# Project: Create A Morse Code Translator

## MVP:

This project is all about using Objects and getting you comfortable iterating through them.

Morse Code Project
Create a user interface that allows the user to either input some English text or some Morse Code

Choose how many input fields you would like to have on your UI.

Create JS functions that would allow the user to translate their English text into Morse Code or Morse Code into English text

Grab the input, break it down into size appropriate chunks (sentence > word > letter)
Compare character against a dictionary (ie Object with key(letter/morse) value (morse/letter))
Return the matching string (letter/morse)
Put the chunks back together (letter > word > sentence)

Make sure to handle spaces properly (ie. there is 1 space between English words, but one space between Morse Code characters)

This is one of the tricky part of this project. Depending on the input you will have to break that input differently (ie indicate to your program how it should split it into chunks)

Write tests for all functions that don't interact with the DOM

By Abstracting as many non-DON function as possible and keeping them as pure as possible (taking an input, giving an output, not relying on global)
