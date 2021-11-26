import generateAnswer from "./generateAnswer.js";
import handleInputSubmit from "./handleInputSubmit.js";

let answer = generateAnswer();

// get user submit button
let inputButton = document.querySelector("#submit");

inputButton.addEventListener("click", handleInputSubmit);
