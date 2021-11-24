import { computerInputNumbers } from './helper.js';

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  };

  computerInputNumbers();
}

new BaseballGame();
