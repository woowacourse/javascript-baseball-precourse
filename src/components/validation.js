import { NUMBER_RULE, ERROR_MESSAGE } from "../constants/constants.js";

export function checkValidInput(userInput) {
  if (!userInput) {
    return ERROR_MESSAGE.NONE;
  }
  if (userInput.length !== NUMBER_RULE.LENGTH) {
    return ERROR_MESSAGE.NOT_THREE_DIGITS;
  }
  if (userInput.length !== new Set(userInput).size) {
    return ERROR_MESSAGE.DUPLICATION;
  }
  for (let digit of userInput) {
    if (digit === "0") {
      return ERROR_MESSAGE.ZERO_INCLUDED;
    }
    if (isNaN(Number(digit))) {
      return ERROR_MESSAGE.CHAR_INCLUDED;
    }
    if (digit === " ") {
      return ERROR_MESSAGE.SPACE_INCLUDED;
    }
  }

  return false;
}
