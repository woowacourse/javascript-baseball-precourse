import { validateUserInput } from "./validate.js";
export default class BaseballGame {
  constructor() {
    this.init();
  }

  init = () => {
    this.isEnded = false;
    this.computerInputNumbers = this.generateRandomNumbers();
    const submitButton = document.getElementById("submit");
    submitButton.onclick = this.start;
  };

  generateRandomNumbers() {
    let randomNumbers = "";
    while (randomNumbers.length != 3) {
      const number = String(Math.floor(Math.random() * 9) + 1);
      if (!randomNumbers.includes(number)) randomNumbers += number;
    }
    return randomNumbers;
  }

  getUserInputNumbers() {
    const userInputBox = document.getElementById("user-input");
    const userInputNumbers = userInputBox.value;
    userInputBox.value = "";
    return userInputNumbers;
  }

  play(computerInputNumbers, userInputNumbers) {
    let resultMessage = "";
    let strikeCount = 0;
    let ballCount = 0;

    if (computerInputNumbers === userInputNumbers) {
      resultMessage = "🎉 정답을 맞추셨습니다. 🎉";
      this.isEnded = true;
      return resultMessage;
    }

    for (let i = 0; i < 3; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) strikeCount++;
      else if (computerInputNumbers.includes(userInputNumbers[i])) ballCount++;
    }

    if (ballCount) resultMessage += `${ballCount}볼`;
    if (strikeCount) resultMessage += ` ${strikeCount}스트라이크`;
    if (!ballCount && !strikeCount) resultMessage = "낫싱";
    return resultMessage;
  }

  renderResult(userInputNumbers, result) {
    const resultBox = document.getElementById("result");
    const resultHTML = `${userInputNumbers} <br><b>${result}</b><br><hr><br>`;
    resultBox.innerHTML += resultHTML;
  }

  renderEnding() {
    const resultBox = document.getElementById("result");
    const endingHTML = `<br> 게임을 새로 시작하시겠습니까? <button id="game-restart-button">게임 재시작</button>`;
    resultBox.innerHTML += endingHTML;

    const submitButton = document.getElementById("submit");
    submitButton.disabled = true;

    const restartButton = document.getElementById("game-restart-button");
    restartButton.addEventListener("click", this.handleRestart);
    restartButton.addEventListener("click", this.init);
  }

  handleRestart() {
    const resultBox = document.getElementById("result");
    const submitButton = document.getElementById("submit");
    resultBox.innerHTML = "";
    submitButton.disabled = false;
  }

  start = () => {
    const computerInputNumbers = this.computerInputNumbers;
    const userInputNumbers = this.getUserInputNumbers();
    const isValid = validateUserInput(userInputNumbers);
    if (!isValid) return;

    const result = this.play(computerInputNumbers, userInputNumbers);
    this.renderResult(userInputNumbers, result);
    if (this.isEnded) this.renderEnding();
  };
}

const game = new BaseballGame();
