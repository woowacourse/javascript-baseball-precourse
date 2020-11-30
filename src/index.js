import numberGenerator from "./numberGenerator.js";
import isValidNumber from "./numberValidator.js";

const $userInput = document.querySelector("#user-input");
const $submitBtn = document.querySelector("#submit");
const $result = document.querySelector("#result");

let computerInputNumbers = new numberGenerator();
const CORRECT = "🎉 정답을 맞추셨습니다. 🎉";

export default function BaseballGame() {
  const restart = () => {
    $userInput.value = "";
    $result.innerHTML = "";
    computerInputNumbers = new numberGenerator();
  };

  const getResult = (text) => {
    if (text !== CORRECT) {
      $result.innerHTML = `<p>${text}</p>`;
      return;
    }

    $result.innerHTML = `<p><strong>${text}</strong></p>
      <span>게임을 새로 시작하겠습니까?</span>
      <button id="game-restart-button">게임 재시작</button>`;

    const $restart = $result.querySelector("#game-restart-button");
    $restart.addEventListener("click", restart);
  };

  const getHint = (computerInputNumbers, userInputNumbers) => {
    let hint;
    let strike = 0;
    let ball = 0;

    userInputNumbers.forEach((value, index) => {
      if (computerInputNumbers.indexOf(value) === index) {
        strike++;
      } else if (computerInputNumbers.indexOf(value) !== -1) {
        ball++;
      }
    });

    if (strike === 0 && ball === 0) hint = `낫싱`;
    else {
      hint =
        `${ball === 0 ? "" : `${ball}볼`} ` +
        `${strike === 0 ? "" : `${strike}스트라이크`}`;
    }

    return hint;
  };

  const play = (computerInputNumbers, userInputNumbers) => {
    return JSON.stringify(computerInputNumbers) ===
      JSON.stringify(userInputNumbers)
      ? CORRECT
      : getHint(computerInputNumbers, userInputNumbers);
  };

  const handleUserInputSubmit = () => {
    const userInputNumbers = $userInput.value
      .split("")
      .map((value) => parseInt(value));
    if (!isValidNumber(userInputNumbers)) return;

    const result = play(computerInputNumbers, userInputNumbers);
    getResult(result);
  };

  $submitBtn.addEventListener("click", handleUserInputSubmit);
}

new BaseballGame();
