import getRandomNumber from './library/utils/getRandomNumber.js';
import {
  MIN_DIGIT,
  MAX_DIGIT,
  DIGIT_COUNT,
} from './library/constants/random-number.js';

export default class BaseballGame {
  #answer;

  constructor() {
    this.#answer = getRandomNumber(MIN_DIGIT, MAX_DIGIT, DIGIT_COUNT);
  }
}

new BaseballGame();
