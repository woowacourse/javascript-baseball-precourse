import { getUserNumber, resetUserInput } from "./user.js";
import { getComputerNumber } from "./computer.js";
import { input_length, result_answer } from "./constant.js";

export default function BaseballGame() {
  let computerNumber = "";
  const hint = document.getElementById("result");
  const submitButton = document.getElementById("submit");
  const resetButton = document.getElementById("game-restart-button");

  // 볼, 스트라이크 갯수 확인
  this.countResult = (computerNumber, userNumber) => {
    let result = [0, 0];
    let i = 0;
    for (; i < input_length; i++) {
      if (userNumber[i] === computerNumber[i]) {
        result[0]++;
      } else if (computerNumber.indexOf(userNumber[i]) != -1) {
        result[1]++;
      }
    }

    return result;
  };

  this.resultMessage = (ball, strike) => {
    let result = "";
    if (ball === 0 && strike === 0) {
      result = "낫싱";
    } else if (ball > 0 && strike > 0) {
      result = `${ball}볼 ${strike}스트라이크`;
    } else if (ball > 0) {
      result = `${ball}볼`;
    } else if (strike > 0) {
      result = `${strike}스트라이크`;
    }

    return result;
  };

  this.play = (computerNumber, userNumber) => {
    const [ball, strike] = this.countResult(computerNumber, userNumber);
    const result = this.resultMessage(ball, strike);

    return result;
  };

  // 게임 재시작(난수 재생성, 힌트 및 입력 초기화)
  this.resetGame = () => {
    computerNumber = getComputerNumber();
    resetUserInput();
    hint.innerHTML = "";
  };

  // 재시작 기능 추가
  this.addRestartButton = () => {
    resetButton.addEventListener("click", this.resetGame);
  };

  // 힌트 제공
  this.onClickPlayButton = () => {
    let userNumber = getUserNumber();
    if (userNumber === "unvalid_input") return;

    let result = this.play(computerNumber, userNumber);
    if (result === "3스트라이크") {
      hint.innerHTML = result_answer;
      this.addRestartButton();
    } else {
      hint.innerHTML = result;
    }
  };

  submitButton.addEventListener("click", this.onClickPlayButton);
  this.resetGame();
}

new BaseballGame();
