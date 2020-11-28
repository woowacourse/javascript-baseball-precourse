import { DIGITS, validateUserInput } from "./validate.js";
export default class BaseballGame {
  constructor() {
    this.isEnded = false; //종료 플래그
    this.computerInputNumbers = ""; // 컴퓨터 입력값

    this.init();
  }

  //* 초기 설정 메서드
  init = () => {
    this.isEnded = false;
    this.computerInputNumbers = this.generateRandomNumbers();
  };

  //* 랜덤 값 생성 메서드
  generateRandomNumbers() {
    let randomNumbers = "";
    while (randomNumbers.length != DIGITS) {
      const number = String(Math.floor(Math.random() * 9) + 1);
      if (!randomNumbers.includes(number)) randomNumbers += number;
    }
    return randomNumbers;
  }

  //* 사용자 입력값 반환 메서드
  getUserInputNumbers() {
    const userInputBox = document.getElementById("user-input");
    const userInputNumbers = userInputBox.value;
    userInputBox.value = "";
    return userInputNumbers;
  }

  //* 입력값 비교 메서드
  compareNumbers(computerInputNumbers, userInputNumbers) {
    let strikeCount = 0;
    let ballCount = 0;
    for (let i = 0; i < DIGITS; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) strikeCount++;
      else if (computerInputNumbers.includes(userInputNumbers[i])) ballCount++;
    }
    return { strikeCount, ballCount };
  }

  //* 비교값에 따른 종료플래그 반환 메서드
  checkIsEnded(strikeCount) {
    if (strikeCount === DIGITS) this.isEnded = true;
    return this.isEnded;
  }

  //* 게임 실행 메서드
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

  //* 게임 결과 출력 메서드
  renderResultHTML(userInputNumbers, result) {
    const resultBox = document.getElementById("result");
    const resultHTML = `<div>${userInputNumbers} <br><b>${result}</b></div><hr>`;
    resultBox.innerHTML += resultHTML;
    if (this.isEnded) {
      const endingHTML =
        "게임을 새로 시작하시겠습니까? <button id='game-restart-button'>게임 재시작</button>";
      resultBox.innerHTML += endingHTML;
    }
  }

  //* 게임 결과 초기화 메서드
  resetResultHTML() {
    const resultBox = document.getElementById("result");
    resultBox.innerHTML = "";
  }

  //* 확인 버튼 핸들러 메서드
  handleSubmitButton() {
    const submitButton = document.getElementById("submit");
    if (submitButton.disabled) submitButton.disabled = false;
    else submitButton.disabled = true; //종료시 비활성화
  }

  //* 재시작 버튼 핸들러 메서드
  handleRestartButton() {
    const restartButton = document.getElementById("game-restart-button");
    if (restartButton) {
      restartButton.addEventListener("click", this.handleSubmitButton);
      restartButton.addEventListener("click", this.resetResultHTML);
      restartButton.addEventListener("click", this.init);
    }
  }

  //* 게임 조작 메서드
  handle = () => {
    const computerInputNumbers = this.computerInputNumbers; // 컴퓨터 입력값
    const userInputNumbers = this.getUserInputNumbers(); // 사용자 입력값
    const isValid = validateUserInput(userInputNumbers); // 사용자 입력값 검사
    if (!isValid) return;

    const result = this.play(computerInputNumbers, userInputNumbers); // 게임 진행
    const resultElement = this.renderResultHTML(userInputNumbers, result); // 게임 결과 출력
    if (this.isEnded) {
      const handleSubmit = this.handleSubmitButton();
      const handleRestart = this.handleRestartButton(this.init);
    }
  };
}

const initGame = () => {
  const game = new BaseballGame();
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", game.handle);
};
initGame();
