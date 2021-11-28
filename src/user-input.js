import { DIGIT } from './constants.js';

export default class UserInput {
  static USER_INPUT_ELEM = document.querySelector('#user-input');

  static clear() {
    this.USER_INPUT_ELEM.value = '';
  }

  static getNumbers() {
    const { value } = this.USER_INPUT_ELEM;
    return value.split('').map((char) => Number(char));
  }

  static isValid(userInputNumbers) {
    return this.isThreeDigit(userInputNumbers)
            && this.isRangeCorrect(userInputNumbers)
            && this.isNotDuplicated(userInputNumbers);
  }

  static isThreeDigit(numbers) {
    return numbers.filter((number) => typeof (number) === 'number').length === DIGIT;
  }

  static isRangeCorrect(numbers) {
    return numbers.filter((number) => (number >= 1 && number <= 9)).length === DIGIT;
  }

  static isNotDuplicated(numbers) {
    return numbers.filter((number, index) => numbers.indexOf(number) === index).length === DIGIT;
  }
}
