import getComputerInputNumbers from './input/computerInputNumbers.js';
import showGameResult from './game/gameResult.js';
import gameStart from './game/gameStart.js';

export default function BaseballGame() {
  const computerInputNumbers = getComputerInputNumbers();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return showGameResult(computerInputNumbers, userInputNumbers);
  };

  gameStart(computerInputNumbers, this.play);
}

new BaseballGame();
