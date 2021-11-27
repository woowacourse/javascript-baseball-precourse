import { generateRandomNumbers } from "./init.js";
import { checkUserInputValue } from "./check.js";

const userInput = document.getElementById("user-input");
const buttonSubmit = document.getElementById("submit");

const userInputValue = null;

export default function BaseballGame() {
  const setRandomNumbers = generateRandomNumbers();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };

  console.log(setRandomNumbers);
}

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(checkUserInputValue(userInput.value));
});

new BaseballGame();
