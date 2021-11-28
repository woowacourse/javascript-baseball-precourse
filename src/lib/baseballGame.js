import { randomThreeNumbers } from '../utils/random.js';

export default class BaseballGame {
  constructor() {
    this.answer = randomThreeNumbers();
  }

  play(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  }
}
