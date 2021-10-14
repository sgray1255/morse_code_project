const breakDownEnglish = (str) => {
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

export default breakDownEnglish;