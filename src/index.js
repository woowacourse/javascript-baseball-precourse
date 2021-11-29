import getComputerInputNumbers from "./input/getComputerInputNumbers.js";
import getUserInputNumbers from "./input/getUserInputNumbers.js";
import showResult from "./view/showResult.js";
import startGame from "./view/startGame.js";

export default function BaseballGame() {
  const computerInputNumbers = getComputerInputNumbers();
  const userInputNumbers = getUserInputNumbers();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return showResult(computerInputNumbers, userInputNumbers);
  };

  startGame(computerInputNumbers, this.play);
}
new BaseballGame();
