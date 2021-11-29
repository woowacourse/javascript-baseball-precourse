import {
  MIN_NUMBER_IN_RANGE,
  MAX_NUMBER_IN_RANGE,
  LENGTH_NUMBERS,
} from './constant/index.js';

export default class Validator {
  constructor() {
    this.userInputValue = null;
  }

  checkIsValidInput(userInputValue) {
    let isValid = false;
    this.userInputValue = userInputValue;

    if (
      this.checkLength()
      && this.checkIsAllValidNumber()
      && this.checkDuplicatedNumber()
    ) {
      isValid = true;
    }

    return isValid;
  }

  checkLength() {
    return this.userInputValue.length === LENGTH_NUMBERS;
  }

  checkIsAllValidNumber() {
    const isAllValidNumber = this.userInputValue.split('').every((e) => {
      let isValidNumber = false;
      if (!Number.isNaN(e) && MIN_NUMBER_IN_RANGE <= e && MAX_NUMBER_IN_RANGE >= e) {
        isValidNumber = true;
      }

      return isValidNumber;
    });

    return isAllValidNumber;
  }

  checkDuplicatedNumber() {
    const { size } = new Set(this.userInputValue.split(''));

    return size === LENGTH_NUMBERS;
  }
}
