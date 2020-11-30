import getGameResult from './game/getGameResult.js';
import getRandomNumbers from './utils/getRandomNumbers.js';
import playGame from './game/playGame.js';

export default function BaseballGame() {
  const computerInputNumbers = getRandomNumbers();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return getGameResult(computerInputNumbers, userInputNumbers);
  };

  playGame(computerInputNumbers, this.play);
}

new BaseballGame();
