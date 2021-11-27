import generateAnswer from "./generateAnswer.js";
import validateInput from "./validateInput.js";

// define game class
export default class BaseballGame {
  constructor() {
    // generate answer on class initiation
    this.answer = generateAnswer();
  }

  // define play method
  play(computerInputNumbers, userInputNumbers) {
    if (!validateInput(userInputNumbers)) return;
  }
}

// initiate game
let game = new BaseballGame();

// handle user input
function handleUserInput() {
  // get user input value
  let inputValue = document.querySelector("#user-input").value;
  game.play(game.answer, inputValue);
}

// get user submit button
let inputButton = document.querySelector("#submit");

// user submit button event listener
inputButton.addEventListener("click", handleUserInput);
