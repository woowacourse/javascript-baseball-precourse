import { getUserNumber, resetUserInput } from "./user.js";
import { getComputerNumber } from "./computer.js";
import { hitAnswerMessage } from "./constant.js";

export default function BaseballGame() {
  let computerNumber = "";
  const hint = document.getElementById("result");
  const submitButton = document.getElementById("submit");

  // 스트라이크 갯수 확인
  const countStrike = (userNumber, computerNumber) => {
    let count = 0;
    let i = 0;
    for (; i < 3; i++) {
      if (userNumber[i] === computerNumber[i]) {
        count++;
      }
    }
    return count;
  };

  // 해당 인덱스의 수가 볼인지 확인
  const isBall = (userNumber, computerNumber, index) => {
    let i = 0;
    for (; i < 3; i++) {
      if (i === index) continue;
      if (userNumber[index] === computerNumber[i]) {
        return true;
      }
    }
    return false;
  };

  // 볼 갯수 확인
  const countBall = (userNumber, computerNumber) => {
    let count = 0;
    let i;
    for (i = 0; i < 3; i++) {
      if (isBall(userNumber, computerNumber, i)) {
        count++;
      }
    }
    return count;
  };

  const play = (userNumber, computerNumber) => {
    let result = "";
    const ball = countBall(userNumber, computerNumber);
    const strike = countStrike(userNumber, computerNumber);

    if (ball > 0) {
      result += `${ball}볼 `;
    }
    if (strike > 0) {
      result += `${strike}스트라이크`;
    }
    if (ball === 0 && strike === 0) {
      result = "낫싱";
    }

    return result;
  };

  // 재시작 기능 추가
  const addResetFunction = () => {
    const resetButton = document.getElementById("game-restart-button");
    resetButton.addEventListener("click", resetGame);
  };

  // 힌트 제공
  const showResult = () => {
    let userNumber = getUserNumber();
    let result = play(userNumber, computerNumber);
    if (userNumber === "unvalid") return;

    if (result === "3스트라이크") {
      hint.innerHTML = hitAnswerMessage;
      addResetFunction();
    } else {
      hint.innerHTML = result;
    }
  };

  // 게임 재시작(난수 재생성, 힌트 및 입력 초기화)
  const resetGame = () => {
    computerNumber = getComputerNumber();
    resetUserInput();
    hint.innerHTML = "";
  };

  resetGame();
  submitButton.addEventListener("click", showResult);
}

new BaseballGame();
