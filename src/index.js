import { validateUserInput } from "./validate.js";
export default class BaseballGame {
  constructor() {
    this.init();
  }

  init = () => {
    this.isEnded = false;
    this.computerInputNumbers = this.generateRandomNumbers(); // 컴퓨터 입력값 설정
    const submitButton = document.getElementById("submit");
    submitButton.onclick = this.start;
  };

  // 랜덤 값 생성 메서드
  generateRandomNumbers() {
    let randomNumbers = "";
    while (randomNumbers.length != 3) {
      const number = String(Math.floor(Math.random() * 9) + 1);
      if (!randomNumbers.includes(number)) randomNumbers += number;
    }
    return randomNumbers;
  }

  // 사용자 입력값 반환 메서드
  getUserInputNumbers() {
    const userInputBox = document.getElementById("user-input");
    const userInputNumbers = userInputBox.value;
    userInputBox.value = "";
    return userInputNumbers;
  }

  // 입력값 비교 메서드
  compareNumbers(computerInputNumbers, userInputNumbers) {
    let strikeCount = 0;
    let ballCount = 0;
    for (let i = 0; i < 3; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) strikeCount++;
      else if (computerInputNumbers.includes(userInputNumbers[i])) ballCount++;
    }
    return { strikeCount, ballCount };
  }

  // 비교값에 따른 종료플래그 반환 메서드
  checkIsEnded(strikeCount) {
    if (strikeCount === 3) this.isEnded = true;
    return this.isEnded;
  }

  // 비교값에 따른 결과 반환 메서드
  play(computerInputNumbers, userInputNumbers) {
    let result = "";
    const { strikeCount, ballCount } = this.compareNumbers(
      computerInputNumbers,
      userInputNumbers
    );
    const isEnded = this.checkIsEnded(strikeCount);
    if (isEnded) result = "🎉 정답을 맞추셨습니다. 🎉";
    else {
      if (ballCount) result += `${ballCount}볼`;
      if (strikeCount) result += ` ${strikeCount}스트라이크`;
      if (!ballCount && !strikeCount) result = "낫싱";
    }
    return result;
  }

  // 게임 결과 출력 메서드
  renderResult(userInputNumbers, result) {
    const resultBox = document.getElementById("result");
    const resultHTML = `<div>${userInputNumbers} <br><b>${result}</b></div><hr>`;
    resultBox.innerHTML += resultHTML;
  }

  // 게임 엔딩 출력 메서드
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
    const computerInputNumbers = this.computerInputNumbers; // 컴퓨터 입력값
    const userInputNumbers = this.getUserInputNumbers(); // 사용자 입력값
    const isValid = validateUserInput(userInputNumbers); // 사용자 입력값 검사
    if (!isValid) return;

    const result = this.play(computerInputNumbers, userInputNumbers); // 게임 진행
    const resultElement = this.renderResult(userInputNumbers, result); // 게임 결과 출력
    if (this.isEnded) this.renderEnding(); //게임 종료
  };
}

const game = new BaseballGame();
