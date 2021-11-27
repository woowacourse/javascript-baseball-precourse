import { generateRandomNumbers } from "./init.js";
import { checkUserInputValue } from "./check.js";
import { ERROR_MESSAGE } from "./constant.js";

const userInput = document.getElementById("user-input");
const buttonSubmit = document.getElementById("submit");

export default function BaseballGame() {
  const computerInputNumbers = generateRandomNumbers();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!checkUserInputValue(userInput.value)) {
    alert(ERROR_MESSAGE);
    userInput.focus();
  }
});

new BaseballGame();
