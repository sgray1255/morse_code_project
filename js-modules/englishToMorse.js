import breakDownEnglish from "./breakDownEnglish.js";

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

breakDownEnglish(input);

const englishToMorse = (fragments) => fragments.map(word => {
  return word.map(char  => {
    return morseCode[char];
    }
).join("")}).join("/");

export default englishToMorse;