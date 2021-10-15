
import breakDownEnglish from "./breakDownEnglish.js";
import breakDownMorse from "./breakDownMorse.js";

const english = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.--': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.-.-.-': '.',
  '--..--': ',',
  '..--..': '?',
  ' / ': ' '
};



const morseToEnglish = (input) => { 

  
    // let morse = breakDownEnglish(input);

    return input.map(word =>  {
      return word.map(char =>{
        return english[char]})}).join(" ").split(',').join('');
    };


export default morseToEnglish;