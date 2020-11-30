export default function BaseballGame() {
  const $userInput = document.querySelector("#user-input");
  const $submitBtn = document.querySelector("#submit");

  let userInputNumbers = new Array(3).fill(0);

  const handleUserInputSubmit = (e) => {
    e.preventDefault();
    userInputNumbers = $userInput.value.split("");
    $userInput.value = "";
  };

  $submitBtn.addEventListener("click", handleUserInputSubmit);

  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

new BaseballGame();
