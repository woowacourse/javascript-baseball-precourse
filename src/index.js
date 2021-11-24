import getComputerNumbers from "./modules/getComputerNumbers.js";


export default function BaseballGame() {

  const computerInputNumbers = getComputerNumbers();
  this.play = function (computerInputNumbers, userInputNumbers) {

      return "결과 값 String";
  };
}

new BaseballGame();
