import getRandomNumber from './library/utils/getRandomNumber.js';
import UserInput from './components/user-input.js';
import State from './library/core/state.js';
import {
  MIN_DIGIT,
  MAX_DIGIT,
  DIGIT_COUNT,
} from './library/constants/random-number.js';

export default class BaseballGame {
  #answer;
  #userNumber;

  constructor() {
    this.#answer = getRandomNumber(MIN_DIGIT, MAX_DIGIT, DIGIT_COUNT);
    this.#userNumber = new State('');
    this.initializeComponents();
  }

  initializeComponents() {
    const $inputWrap = document.getElementById('input-wrap');
    new UserInput($inputWrap, { userNumber: this.#userNumber });
  }
}

new BaseballGame();
