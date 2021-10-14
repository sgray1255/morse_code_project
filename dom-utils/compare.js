import breakDown from "./breakDown";
// create object to house translation values 
// convert toLowerCase();
const wordsArr = breakDown(str);

const translated = wordsArr.map(word => word.map(char => char))



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
}

