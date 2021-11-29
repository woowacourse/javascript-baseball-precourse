import getUserInput from './input/getUserInput.js';
import getComputerInput from './input/getComputerInput.js';

export default function BaseballGame() {
  const computerInputNumbers = getComputerInput();

  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers);
    return '결과 값 String';
  };

  getUserInput(computerInputNumbers, this.play);
}

new BaseballGame();
