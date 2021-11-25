import { generateRandomNumber } from './utils.js';

export default class BaseballGame {
  constructor() {
    this.answer = generateRandomNumber();
  }
  play(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  }
}

new BaseballGame();
