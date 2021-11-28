import getComputerInputNumbers from "./input/getComputerInputNumbers.js";

export default function BaseballGame() {
  const computerInputNumbers = getComputerInputNumbers();
  console.log(computerInputNumbers);
  const userInputNumbers = getUserInputNumbers();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return;
  };

  startGame(computerInputNumbers);
}

new BaseballGame();
