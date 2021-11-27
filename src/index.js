import { getUserNumber, resetUserInput } from "./user.js";
import { getComputerNumber } from "./computer.js";
import { input_length, result_answer } from "./constant.js";

export default function BaseballGame() {
  let computerNumber = "";
  const hint = document.getElementById("result");
  const submitButton = document.getElementById("submit");

  this.play = (userNumber, computerNumber) => {
    const [ball, strike] = this.countResult(userNumber, computerNumber);
    const result = this.resultMessage(ball, strike);
    return result;
  };

  this.resultMessage = (ball, strike) => {
    if (ball === 0 && strike === 0) {
      return "낫싱";
    } else if (ball > 0 && strike > 0) {
      return `${ball}볼 ${strike}스트라이크`;
    } else if (ball > 0) {
      return `${ball}볼`;
    } else if (strike > 0) {
      return `${strike}스트라이크`;
    }
  };

  // 게임 재시작(난수 재생성, 힌트 및 입력 초기화)
  this.resetGame = () => {
    computerNumber = getComputerNumber();
    resetUserInput();
    hint.innerHTML = "";
  };

  // 볼, 스트라이크 갯수 확인
  this.countResult = (userNumber, computerNumber) => {
    let ball = 0;
    let strike = 0;

    let i = 0;
    for (; i < input_length; i++) {
      if (userNumber[i] === computerNumber[i]) {
        strike++;
      } else if (computerNumber.indexOf(userNumber[i]) != -1) {
        ball++;
      }
    }
    return [ball, strike];
  };

  // 재시작 기능 추가
  this.addResetFunction = () => {
    const resetButton = document.getElementById("game-restart-button");
    resetButton.addEventListener("click", this.resetGame);
  };

  // 힌트 제공
  this.showResult = () => {
    let userNumber = getUserNumber();
    let result = this.play(userNumber, computerNumber);
    if (userNumber === "unvalid_input") return;

    if (result === "3스트라이크") {
      hint.innerHTML = result_answer;
      this.addResetFunction();
    } else {
      hint.innerHTML = result;
    }
  };

  submitButton.addEventListener("click", this.showResult);
  this.resetGame();
}

new BaseballGame();
