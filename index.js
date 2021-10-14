import breakDownEnglish from "./js-modules/breakDownEnglish.js";
import breakDownMorse from "./js-modules/breakDownMorse.js";
// import breakDownMorse from "./js-modules/breakDownMorse.js";
import englishToMorse from "./js-modules/englishToMorse.js";
import morseToEnglish from "./js-modules/morseToEnglish.js";
// import morseToEnglish from "./js-modules/morseToEnglish.js";



const button = document.querySelector("#translate");

button.addEventListener("click", (event) => {

  const textField = document.querySelector("#input");
  const input = textField.value;

  event.preventDefault();
  
  if(!input) {
    alert("Type a phrase in English or morse code to translate");
    return;
  }
  
  console.log(morseToEnglish(breakDownMorse(input)));
  
  // console.log();
  
  // console.log(englishToMorse(breakDownEnglish(input)));
  
  // console.log(morseToEnglish(morseWord))
})