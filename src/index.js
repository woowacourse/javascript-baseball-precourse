import getRandomNumber from './library/utils/getRandomNumber.js';
import {
  MIN_DIGIT,
  MAX_DIGIT,
  DIGIT_COUNT,
} from './library/constants/random-number.js';
import UserInput from './components/user-input.js';

export default class BaseballGame {
  #answer;

  constructor() {
    this.initializeComponents();
    this.#answer = getRandomNumber(MIN_DIGIT, MAX_DIGIT, DIGIT_COUNT);
  }

  initializeComponents() {
    const $userInput = document.getElementById('input-wrap');
    new UserInput($userInput);
  }
}

new BaseballGame();
