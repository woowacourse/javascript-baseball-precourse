import BaseballGame from "./BaseballGame.js";
import { GAME_RESULT_STATE } from "./constants.js";
import { checkDuplicationNumbers, checkThreeDigitNumbers } from "./utils.js";

const BaseballGameStarter = new BaseballGame();

const submitButton = document.querySelector("#submit");
const userInputNumbers = document.querySelector("#user-input");
const gameResult = document.querySelector('#result');

userInputNumbers.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    submitButton.click();
  }
});

const bindGameRestartEvent = () => {
  const gameRestartButton = document.querySelector("#game-restart-button");

  gameRestartButton.addEventListener("click", () => {
    BaseballGameStarter.restartGame();
    gameResult.innerHTML = "";
    userInputNumbers.value = "";
    userInputNumbers.focus();
  });
};

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

  const { template, status } = BaseballGameStarter.play(userInputNumbers.value);
  gameResult.innerHTML = template;
  if (status === GAME_RESULT_STATE.CORRECT) bindGameRestartEvent();
  else userInputNumbers.focus();
});
