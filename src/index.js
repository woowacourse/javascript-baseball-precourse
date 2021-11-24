export default function BaseballGame() {
  const reset = () => {
    const userInput = document.getElementById("user-input");
    const result = document.getElementById("result");
    userInput.value = "";
    result.innerText = "";
  };

  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };

  reset();
}

new BaseballGame();
