
import breakDownMorse from "./breakDownMorse.js";

const morseCode = {
  a: '. -',
  b: '- . . .',
  c: '- . - .',
  d: '- . .',
  e: '.',
  f: '. . - .',
  g: '- - .',
  h: '. . . .',
  i: '. .',
  j: '. - -',
  k: '- . -',
  l: '. - . .',
  m: '- -',
  n: '- .',
  o: '- - -',
  p: '. - - .',
  q: '- - . -',
  r: '. - .',
  s: '. . .',
  t: '-',
  u: '. . -',
  v: '. . . -',
  w: '. - -',
  x: '- . . -',
  y: '- . - -',
  z: '- - . .',
  fullstop: '. - . - .-',
  comma: '- - . . - -',
  query: '. . - - . .'
};

const alphabet = Object.assign({}, ...Object.entries(morseCode).map(([a,b]) => ({ [b]: a })));

breakDownMorse(input);

const morseToEnglish = (word) => { 
    return word.map(letter =>  alphabet[letter].join(" ")).join("");
    }


export default morseToEnglish;