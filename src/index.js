import getUserInput from "./input/getUserInput.js";

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers);
    return "결과 값 String";
  };

  getUserInput("computer", this.play);
}

new BaseballGame();
