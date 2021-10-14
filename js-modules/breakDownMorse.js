const breakDownMorse = () => {
  if (typeof str !== 'string'){
    new Error ("Must give valid text input")
  } else {
    const words = str.split("    ").map(word => word.split(' '));
    const toBeTranslated = words.map(char => char.join(' '));
    return toBeTranslated;
}
};

export default breakDownMorse;