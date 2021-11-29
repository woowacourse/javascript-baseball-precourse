import { INPUT_RULES, ERROR_MESSAGE } from './constants.js';
import { $ } from './utils.js';

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = this.generateRandomNumbers();
    this.attachSubmitHandler();
  }

  generateRandomNumbers() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
      INPUT_RULES.MIN_OF_RANGE,
      INPUT_RULES.MAX_OF_RANGE,
      INPUT_RULES.NUMBER_OF_DIGITS
    );
    return randomNumbers;
  }

  attachSubmitHandler() {
    const $submitBtn = $('#submit');
    const $userInput = $('#user-input');
    $submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentUserInput = $userInput.value;
      if (!this.isValid(currentUserInput)) {
        alert(ERROR_MESSAGE);
      }
      $userInput.value = '';
    });
  }

  isValid(input) {
    const regex = /[^1-9]/g;
    const notValidChars = input.match(regex);
    const setString = new Set(input);

    if (input === '') {
      return false;
    }
    if (notValidChars) {
      return false;
    }
    if (input.length !== INPUT_RULES.NUMBER_OF_DIGITS) {
      return false;
    }
    if (setString.size !== input.length) {
      return false;
    }
    return true;
  }
}

new BaseballGame();
