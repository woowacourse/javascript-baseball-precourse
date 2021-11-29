import { LENGTH, INPUT_ERROR, $input } from "../constatns/constants.js";

export default function validateInput (userInput) {
  if(!isThreeDigit(userInput) || !isNumber(userInput) || !isUnique(userInput)){
    alert(INPUT_ERROR);
    $input.value = "";
    $input.focus();
    return false;
  }

  return true;
}

const isThreeDigit = userInput => userInput.length === LENGTH;
const isNumber = userInput => new RegExp(/[1-9]{3}/).test(userInput);
const isUnique = userInput => (new Set(userInput)).size === LENGTH;