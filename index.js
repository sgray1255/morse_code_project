import breakDownEnglish from "./js-modules/breakDownEnglish.js";
import breakDownMorse from "./js-modules/breakDownMorse.js";
import englishToMorse from "./js-modules/englishToMorse.js";
import morseToEnglish from "./js-modules/morseToEnglish.js";




const button = document.querySelector("#translate");

let list = {};


button.addEventListener("click", (event) => {

  const textField = document.querySelector("#input");
  const input = textField.value;

  
  
  if(!input) {
    alert("Type a phrase in English or morse code to translate");
    return;
  }
  
  console.log((breakDownMorse(input)));
  
  // d
  
  console.log(englishToMorse(breakDownEnglish(input)));
  
  // console.log(morseToEnglish(breakDownMorse(input)));
   
  const translation = document.createElement('h4');
  translation.classList.add("translation");
  const text = `${englishToMorse(breakDownEnglish(input))}`;
  const textNode = document.createTextNode(text);
  translation.appendChild(textNode);

  if (output.innerHTML) {
    output.innerHTML = "";
    output.appendChild(translation);
  } else {
    output.appendChild(translation);
  };

 
});


