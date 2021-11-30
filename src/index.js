import getComputerInputNumbers from "./input/getComputerInputNumbers.js";
import inputCompare from "./view/inputCompare.js";
import startGame from "./view/startGame.js";

export default function BaseballGame() {
  const computerInputNumbers = getComputerInputNumbers();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return inputCompare(computerInputNumbers, userInputNumbers);
  };

  startGame(computerInputNumbers, this.play);
}
new BaseballGame();
