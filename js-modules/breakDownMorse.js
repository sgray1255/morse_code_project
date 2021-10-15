const breakDownMorse = (morse) => {
  // if (typeof morse !== 'string'){
  //   throw new Error ("Must give valid morse input")
  // } 
    const words = morse.split("/");
    const chars = words.map(n => n.split(" "));
    return chars;
};

export default breakDownMorse;