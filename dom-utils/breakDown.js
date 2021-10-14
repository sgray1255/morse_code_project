const breakDownMorse = (str) => {
  if (typeof str !== 'string'){
    new Error ("Must give valid text input")
  } else {
    const words = str.split("    ");
    const chars = words.map(word => word.split(' '));
    console.log(chars);
    return chars;
}
};