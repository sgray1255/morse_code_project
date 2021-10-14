const breakDown = (str) => {
  if (typeof str !== 'string'){
    new Error ("Must give valid text input")
  } else {
    const lower = str.toLowerCase();
    const words = lower.split(" ");
    const wordsArr = words.split("");
    return wordsArr;
}
}

export default breakDown;