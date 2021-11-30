import { $ } from "../util/index.js";
import isValid from "./isValid.js";

const getUserNumber = () => {
  const $userInput = $("#user-input").value;
  const userInputNumbers = $userInput
    .split("")
    .map((number) => parseInt(number, 10));

  console.log(userInputNumbers);
  if (isValid(userInputNumbers)) {
    return parseInt(userInputNumbers.join(""), 10);
  }
};

export default getUserNumber;
