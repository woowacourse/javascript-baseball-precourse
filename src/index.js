import getUserInput from './input/getUserInput.js';
import getComputerInput from './input/getComputerInput.js';
import getGameResult from './play/getGameResult.js';
import printGameResult from './play/printGameResult.js';

export default function BaseballGame() {
  const computerInputNumbers = getComputerInput();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return printGameResult(getGameResult(computerInputNumbers, userInputNumbers));
  };

  getUserInput(computerInputNumbers, this.play);
}

new BaseballGame();
