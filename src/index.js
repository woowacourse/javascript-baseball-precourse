import getComputerInputNumbers from "./input/getComputerInputNumbers.js";
import showResult from "./view/showResult.js";
import startGame from "./view/startGame.js";

export default function BaseballGame() {
  const computerInputNumbers = getComputerInputNumbers();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return showResult(computerInputNumbers, userInputNumbers);
  };

  startGame(computerInputNumbers, this.play);
}
new BaseballGame();
