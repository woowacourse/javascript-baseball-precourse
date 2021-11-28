import { ANSWER_LENGTH, INPUT_ERROR_MESSAGE } from "./constants.js";

export default class Validator {
  static isValid(userInputString) {
    const result = this.isThreeDigit(userInputString) 
                    && this.isNumberRangeMatched(userInputString)
                    && this.isUnique(userInputString);

    return { result, message: INPUT_ERROR_MESSAGE };
  }

  static isThreeDigit(userInputString) {
    if (userInputString.length !== ANSWER_LENGTH) { 
      return false;
    }
    
    return !(new RegExp('[^0-9]+').test(userInputString));
  }

  static isNumberRangeMatched(userInputString) {
    return !(new RegExp('[^1-9]+')).test(userInputString);
  }

  static isUnique(userInputString) {
    return (new Set(userInputString)).size === ANSWER_LENGTH;
  }
}