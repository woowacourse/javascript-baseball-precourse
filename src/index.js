import generateAnswer from "./generateAnswer.js";
import validateInput from "./validateInput.js";
import compareValues from "./compareValues.js";
import formatResult from "./formantResult.js";
import setHint from "./setHint.js";

// get DOM
const inputArea = document.querySelector("#user-input");
const inputButton = document.querySelector("#submit");
const resultArea = document.querySelector("#result");
const correctDiv = document.querySelector("#correct");

// user submit button event listener
inputButton.addEventListener("click", handleUserInput);

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

    // return result in string format
    return formatResult(ball, strike);
  }
}

// handle user input
function handleUserInput() {
  // get user input value
  const inputValue = inputArea.value;

  // play game and get result
  const result = game.play(game.answer, inputValue);

  // show correct div on answer
  if (result === "3스트라이크") correctDiv.style.display = "block";

  // set hint
  setHint(result, resultArea);
}

// initiate game
let game = new BaseballGame();
