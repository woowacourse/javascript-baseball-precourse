import getGameResult from "./game/getGameResult.js";
import playGame from "./game/playGame.js";
import getComputerNumber from "./number/getComputerNumber.js";

export default function BaseballGame() {
  const computerInputNumbers = getComputerNumber();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return getGameResult(computerInputNumbers, userInputNumbers);
  };

  playGame(computerInputNumbers, this.play);
}

new BaseballGame();
