import generateRandomNumber from "./randomNumber.js";
import isValid from "./validation.js";
import compareNumber from "./compare.js";

let computerInputNumbers = generateRandomNumber();
console.log(computerInputNumbers);

const playerInput = document.getElementById("user-input");

function play(e) {
  e.preventDefault();
  if (isValid(playerInput.value) === true) {
    const userInputNumbers = [...playerInput.value.toString()];
    let result = compareNumber(computerInputNumbers, userInputNumbers);
    printResult(result);
  }
}

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", play);

function restartGame(e) {
  e.preventDefault();
  computerInputNumbers = generateRandomNumber();
  console.log(computerInputNumbers);
  document.getElementById("result").innerHTML = "";
}

function printResult(string) {
  if (string !== "정답!") {
    document.getElementById("result").innerHTML = string;
  } else {
    document.getElementById("result").innerHTML = string;
    const correctResult = document.createElement("h5");
    correctResult.innerHTML = "게임을 새로 시작하시겠습니까?";
    const restartButton = document.createElement("button");
    restartButton.innerHTML = "재시작";
    restartButton.setAttribute("id", "game-restart-button");
    //4. 정답을 맞추면 재시작하기
    restartButton.addEventListener("click", restartGame);

    document.getElementById("result").appendChild(correctResult);
    document.getElementById("result").appendChild(restartButton);
  }
}
