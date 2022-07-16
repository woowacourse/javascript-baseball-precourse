import isValid from "./validation.js";
import compareNumber from "./compare.js";
import generateRandomNumber from "./randomNumber.js";

let computerInputNumbers = generateRandomNumber();
console.log(computerInputNumbers);

const playerInput = document.getElementById("user-input");

export default function BaseballGame() {
  const play = (computerInputNumbers, userInputNumbers) => {
    return compareNumber(computerInputNumbers, userInputNumbers);
  };

  const game = (e) => {
    e.preventDefault();
    if (isValid(playerInput.value) === true) {
      const userInputNumbers = [...playerInput.value.toString()];
      let result = play(computerInputNumbers, userInputNumbers);
      printResult(result);
    }
  };

  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", game);

  function restartGame(e) {
    e.preventDefault();
    computerInputNumbers = generateRandomNumber();
    console.log(computerInputNumbers);
    document.getElementById("result").innerHTML = "";
  }

  function makeRestartButton() {
    const restartButton = document.createElement("button");
    restartButton.innerHTML = "재시작";
    restartButton.setAttribute("id", "game-restart-button");

    restartButton.addEventListener("click", restartGame);

    document.getElementById("result").appendChild(restartButton);
  }

  function printResult(string) {
    if (string !== "정답!") {
      document.getElementById("result").innerHTML = string;
    } else {
      document.getElementById("result").innerHTML = string;
      const correctResult = document.createElement("h5");
      correctResult.innerHTML = "게임을 새로 시작하시겠습니까?";

      document.getElementById("result").appendChild(correctResult);

      makeRestartButton();
    }
  }
}

new BaseballGame();
