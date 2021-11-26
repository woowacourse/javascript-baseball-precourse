import { NUMBER, STRING } from '../constant.js';

export default class GetUserInputNumbers {
  constructor($userInput) {
    this.userInputs = $userInput.value;
    this.userInputNumbers = [];
  }

  isNotDuplicate() {
    // userInput이 중복되는 숫자가 있는지 체크
    for (let i = 0; i < this.userInputs.length; i += 1) {
      const userInput = this.userInputs[i];
      if (!this.userInputNumbers.includes(userInput)) {
        this.userInputNumbers.push(userInput);
      }
    }
  }

  isRightNumber() {
    // userInput이 1~9 사이 숫자인지 체크
    for (let i = 0; i < this.userInputs.length; i += 1) {
      const userInput = this.userInputs[i];
      const userInputAsciiCodeNumber = userInput.charCodeAt();
      if (
        userInputAsciiCodeNumber <= NUMBER.ZERO_ASCII_CODE ||
        userInputAsciiCodeNumber > NUMBER.NINE_ASCII_CODE
      ) {
        return false;
      }
    }
    return true;
  }

  isRightLength() {
    // userInput.length 체크
    if (this.userInputs.length !== NUMBER.LENGTH) {
      return false;
    }
    return true;
  }

  checkTheRightUserInput() {
    if (!this.isRightLength() || !this.isRightNumber()) {
      return false;
    }

    this.isNotDuplicate();
    if (this.userInputNumbers.length !== NUMBER.LENGTH) {
      return false;
    }
    return true;
  }

  main() {
    if (!this.checkTheRightUserInput()) {
      return STRING.ALERT_MESSAGE;
    }

    return this.userInputNumbers.map((string) => Number(string));
  }
}
