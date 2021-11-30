import { NUMBER_LENGTH, USER_INPUT_ALERT } from '../libs/constant.js';
import { $ } from '../utils/index.js';

const InputCheckMethods = [
  (value) => {
    if (value === '') {
      alert(USER_INPUT_ALERT.blank);

      return false;
    }

    return true;
  },
  (value) => {
    if (!Number(value) && Number(value) !== 0) {
      alert(USER_INPUT_ALERT.notNumber);

      return false;
    }

    return true;
  },
  (value) => {
    if (value.includes('0')) {
      alert(USER_INPUT_ALERT.removeZero);

      return false;
    }

    return true;
  },
  (value) => {
    if (new Set(value).size !== NUMBER_LENGTH) {
      alert(USER_INPUT_ALERT.overlap);

      return false;
    }

    return true;
  },
];

export default class User {
  constructor() {
    this.$userInput = $('#user-input');
  }

  isInputValid(userInputNumbers) {
    return InputCheckMethods.every((InputCheckMethod) => InputCheckMethod(userInputNumbers));
  }

  getUserInputValue() {
    return this.$userInput.value;
  }

  setUserInputValue(value) {
    this.$userInput.value = value;
  }
}
