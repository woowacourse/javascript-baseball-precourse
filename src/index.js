import getComputerNumbers from './computer/answerGenerator.js';
import getGameResult from './computer/gameResult.js';
import playGame from './gameController.js';

export default function BaseballGame() {
  const computerInputNumbers = getComputerNumbers();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return getGameResult(computerInputNumbers, userInputNumbers);
  };

  playGame(computerInputNumbers, this.play);
}

new BaseballGame();
