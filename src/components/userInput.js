import { NUMBER_RULE, ERROR_MESSAGE } from "../constants/constants.js";

export default class User {
  constructor() {
    this.userInput = document.getElementById("user-input");
  }

  getUserInputNumbers() {
    return this.userInput.value;
  }

  checkValidInput(userInput) {
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

  alertErrorMessage(userInputNumbers) {
    const errorMessage = this.checkValidInput(userInputNumbers);

    alert(errorMessage);
    this.userInput.value = "";
    this.userInput.focus();
  }
}
