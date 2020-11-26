import { generateTargetNumbers } from '../utils/generateTargetNumbers.js';

class BaseballGame {
  constructor($target) {
    this.$target = $target;

    this.answer = generateTargetNumbers();
  }

  play(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  }
}

export default BaseballGame;
