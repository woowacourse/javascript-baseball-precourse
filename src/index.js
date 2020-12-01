import playGame from './game/playGame.js';
import getGameResult from './game/getGameResult.js';
import getComputerInput from './input/getComputerInput.js';

export default function BaseballGame() {
  const computerInputNumbers = getComputerInput();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return getGameResult(computerInputNumbers, userInputNumbers);
  };

  playGame(computerInputNumbers, this.play);
}

new BaseballGame();
