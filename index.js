import breakDownEnglish from "./js-modules/breakDownEnglish.js";
import breakDownMorse from "./js-modules/breakDownMorse.js";
import englishToMorse from "./js-modules/englishToMorse.js";
import morseToEnglish from "./js-modules/morseToEnglish.js";




const button = document.querySelector("#translateEnglish");


button.addEventListener("click", (event) => {

  event.preventDefault();

  
  const textField = document.querySelector("#englishInput");
  const input = textField.value;

  
  
  if(!input) {
    alert("Type a phrase in English or morse code to translate");
    return;
  }
  
  // console.log((breakDownMorse(input)));
  
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

  

  // const clearFields = (input) => {
  //   const textField = document.querySelector("#englishInput");
  //   const input = textField.innerHTML;
  
  //   // const text = document.querySelector("#morseInput");
  //   // const morseInput = text.value;
  
  //   input = " ";
  // };

});

const morseButton = document.querySelector("#translateMorse");

morseButton.addEventListener("click", (event) => {

  event.preventDefault();

  const text = document.querySelector("#morseInput");
  const morseInput = text.value;

  
  
  if(!morseInput) {
    alert("Type a phrase in English or morse code to translate");
    return;
  }
  
  // console.log((breakDownMorse(input)));
  
  // d
  
  // console.log(englishToMorse(breakDownEnglish(input)));
  
  console.log(typeof morseToEnglish(breakDownMorse(morseInput)));
  console.log(morseToEnglish(breakDownMorse(morseInput)));
   
  const translationMorse = document.createElement('h4');
  translationMorse.classList.add("translationMorse");
  const textMorse = `${morseToEnglish(breakDownMorse(morseInput))}`;
  const morseNode = document.createTextNode(textMorse);
  translationMorse.appendChild(morseNode);

  

  if (output.innerHTML) {
    output.innerHTML = "";
    output.appendChild(translationMorse);
    clearInput();
  } else {
    output.appendChild(translationMorse);
    clearInput();
  };

 
});


