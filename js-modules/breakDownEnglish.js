const breakDownEnglish = (input) => {
  if (typeof input !== 'string'){
    new Error ("Must give valid text input")
  } else {
    const lower = input.toLowerCase();
    const words = lower.split(" ");
    const fragments = words.map(word => word.split(''));
    console.log(fragments);
    return fragments;
}
};

export default breakDownEnglish;