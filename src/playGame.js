import { checkValidValue } from "./checkValidValue.js";

const button = document.getElementById("submit");
const userInput = document.getElementById("user-input");

const checkUserInputValue = event => {
  event.preventDefault();
  const isValidValue = checkValidValue(userInput.value);
  console.log(isValidValue, userInput.value);
};

export function playGame(computerInputNumbers) {
  button.addEventListener("click", checkUserInputValue);
}
