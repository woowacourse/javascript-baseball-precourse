import { isNumberObject } from '../common/index.js';

/* eslint-disable no-undef */
const { pickNumberInRange } = MissionUtils.Random;

export default class BaseballGame {
  constructor(state) {
    const { digit, start, end } = isNumberObject(state);
    this.digit = digit;
    this.computerInputNumbers = this.getRandomNumbers(start, end);
    console.log(this.computerInputNumbers);
  }

  getRandomNumbers(startNumber, endNumber) {
    const result = new Set();
    while (true) {
      result.add(pickNumberInRange(startNumber, endNumber));
      if (result.size === this.digit) return [...result].join('');
    }
  }
}
