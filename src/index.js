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
    // console.log(this.computerInputNumbers);
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

  //* 결과 반환 메서드
  play(computerInputNumbers, userInputNumbers) {
    let result = "";
    const { strikeCount, ballCount } = this.compareNumbers(
      computerInputNumbers,
      userInputNumbers
    );
    if (strikeCount === DIGITS) {
      this.isEnded = true;
      result = "🎉 정답을 맞추셨습니다. 🎉";
      return result;
    }
    if (ballCount) result += `${ballCount}볼`;
    if (strikeCount) result += ` ${strikeCount}스트라이크`;
    if (!ballCount && !strikeCount) result = "낫싱";
    return result;
  }

  //* 결과 출력 메서드
  renderResult(userInputNumbers, result) {
    const resultBox = document.getElementById("result");
    const resultHTML = `<p>입력: ${userInputNumbers}</p><p><b>${result}</b></p><hr>`;
    const endingHTML = `<div>게임을 새로 시작하시겠습니까? <button id="game-restart-button" data-action="restart">게임 재시작</button></div>`;
    resultBox.innerHTML += resultHTML;
    if (this.isEnded) resultBox.innerHTML += endingHTML;
  }

  //* 결과 초기화 메서드
  resetResult() {
    const resultBox = document.getElementById("result");
    resultBox.innerHTML = "";
  }

  //* 확인 버튼 핸들러 메서드
  toggleSubmitButton() {
    const submitButton = document.getElementById("submit");
    if (submitButton.disabled) submitButton.disabled = false;
    else submitButton.disabled = true; //종료시 비활성화
  }

  //* 재시작 메서드
  restart = () => {
    const initGame = this.init();
    const resetResult = this.resetResult();
    const toggleOnSubmit = this.toggleSubmitButton();
  };

  //* 실행 메서드
  run = () => {
    const computerInputNumbers = this.computerInputNumbers; // 컴퓨터 입력값
    const userInputNumbers = this.getUserInputNumbers(); // 사용자 입력값
    const isValid = validateUserInput(userInputNumbers); // 사용자 입력값 검사
    if (!isValid) return;

    const result = this.play(computerInputNumbers, userInputNumbers); // 게임 진행
    const resultElement = this.renderResult(userInputNumbers, result); // 게임 결과 출력
    if (this.isEnded) this.toggleSubmitButton();
  };

  //* 메뉴 클릭
  onClick = (event) => {
    const action = event.target.dataset.action;
    if (action) this[action]();
  };
}

const initGame = () => {
  const game = new BaseballGame();
  document.addEventListener("click", (event) => game.onClick(event));
};

initGame();
