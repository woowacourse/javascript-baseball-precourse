import getComputerInputNumbers from "./input/getComputerInputNumbers.js";
import inputCompare from "./view/inputCompare.js";
import startGame from "./view/startGame.js";

export default function BaseballGame() {
  const computerInputNumbers = getComputerInputNumbers();
  console.log("정답", computerInputNumbers);

  this.play = function (computerInputNumbers, userInputNumbers) {
    return inputCompare(computerInputNumbers, userInputNumbers);
  };

  startGame(computerInputNumbers, this.play);
}
new BaseballGame();
