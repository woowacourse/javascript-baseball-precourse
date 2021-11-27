import BaseballGame from "./BaseballGame.js";

const BaseballGameStarter = new BaseballGame();

const submitButton = document.querySelector("#submit");
const userInputNumbers = document.querySelector("#user-input");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    !checkThreeDigitNumbers(userInputNumbers.value) ||
    checkDuplicationNumbers(userInputNumbers.value)
  ) {
    alert("1~9까지의 수를 중복없이 3개 입력해주세요.");
    userInputNumbers.value = "";
    userInputNumbers.focus();
    return;
  }

  BaseBallGameStarter.play(userInputNumbers.value);
});
