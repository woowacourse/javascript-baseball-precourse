import makeAnswer from "./makeAnswer.js";

export default function BaseballGame() {
  const reset = () => {
    const userInput = document.getElementById("user-input");
    const result = document.getElementById("result");
    userInput.value = "";
    result.innerText = "";
    const answer = makeAnswer();
  };

  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };

  reset();
}

new BaseballGame();
