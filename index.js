let str = "This is a really big sentence."

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

const breakDown = (str) => {
  if (typeof str !== 'string'){
    new Error ("Must give valid text input")
  } else {
    const lower = str.toLowerCase();
    const words = lower.split(" ");
    const fragments = words.map(word => word.split(''));
    console.log(fragments);
    return fragments;
}
};

const fragments = breakDown(str);

const translated = fragments.map(word => {
  return word.map(char  => {
    return morseCode[char];
    }
).join(" ")}).join("      ");

console.log(translated);