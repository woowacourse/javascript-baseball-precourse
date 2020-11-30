import BaseballGame from "./game.js";
import { validateDigit, validateUnique, validateNumber } from "./validate.js";
export default class BaseballGameHandler {
  constructor() {
    this.game = new BaseballGame();

    this.userInputBox = document.getElementById("user-input");
    this.resultBox = document.getElementById("result");
    this.submitButton = document.getElementById("submit");
  }

  // 사용자 입력 받기
  getUserInputNumbers() {
    const userInputNumbers = this.userInputBox.value;
    this.userInputBox.value = "";
    return userInputNumbers;
  }

  // 사용자 입력 검사
  validateUserInput(useInputNumbers) {
    const isValid =
      validateDigit(useInputNumbers, this.game.DIGITS) &&
      validateUnique(useInputNumbers) &&
      validateNumber(useInputNumbers);
    if (!isValid) alert("입력값이 잘못되었습니다. 다시 입력해주세요 :)");
    return isValid;
  }

  // 결과 출력
  renderResult(userInputNumbers, result) {
    const resultHTML = `<p>입력: ${userInputNumbers}</p><p><b>${result}</b></p><hr>`;
    this.resultBox.innerHTML += resultHTML;
  }
  renderEnd() {
    const resultHTML = `<div>게임을 새로 시작하시겠습니까? <button id="game-restart-button" data-action="restart">게임 재시작</button></div>`;
    this.resultBox.innerHTML += resultHTML;
    this.submitButton.disabled = true;
  }

  // 실행 이벤트
  run = () => {
    const useInputNumbers = this.getUserInputNumbers();
    const isValid = this.validateUserInput(useInputNumbers);
    if (!isValid) return;

    const computerInputNumbers = this.game.computerInputNumbers;
    const result = this.game.play(computerInputNumbers, useInputNumbers);
    const renderResult = this.renderResult(useInputNumbers, result);
    if (this.game.isEnded) this.renderEnd();
  };

  // 재시작 이벤트
  restart = () => {
    this.game.init();
    this.resultBox.innerHTML = "";
    this.submitButton.disabled = false;
  };

  // 버튼 클릭
  onClick = (event) => {
    const action = event.target.dataset.action;
    if (action) this[action]();
  };
}

const gameHandler = new BaseballGameHandler();
document.addEventListener("click", (event) => gameHandler.onClick(event));
