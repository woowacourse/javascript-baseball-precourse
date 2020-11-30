const gameData = {
  computerNumbers: -1,
  isSuccess: false,
};

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

const getUserInput = () => {};

const makeComputerInput = () => {};

const init = () => {
  gameData.isSuccess = false;
  gameData.computerNumbers = makeComputerInput();
  document.getElementById("submit").addEventListener("click", getUserInput);
};

document.addEventListener("DOMContentLoaded", function () {
  init();
});
