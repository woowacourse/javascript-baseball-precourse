import generateAnswer from "./generateAnswer.js";
import validateInput from "./validateInput.js";
import compareValues from "./compareValues.js";

// define game class
export default class BaseballGame {
  constructor() {
    // generate answer on class initiation
    this.answer = generateAnswer();
  }

  // define play method
  play(computerInputNumbers, userInputNumbers) {
    // if input is invalid, end function
    if (!validateInput(userInputNumbers)) return;

    // compare answer and input
    const [ball, strike] = compareValues(
      computerInputNumbers,
      userInputNumbers
    );

    console.log(ball, strike);
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
