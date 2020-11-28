export default class BaseballGame {
  constructor() {
    this.strike = 0;
    this.ball = 0;
    this.runningGame = true;
    this.answer = this.makeOnAnswer();
  }

  initValue() {
    this.strike = 0;
    this.ball = 0;
  }

  makeOnAnswer() {
    const maxNumberArray = this.createMaxNumberLengthArray();
    let answer = "";
    for (let i = 1; i <= 3; i++) {
      const selectedNumber = maxNumberArray.splice(
        this.selectRandomNumber(maxNumberArray.length),
        1
      );
      answer += selectedNumber;
    }

    return answer;
  }

  createMaxNumberLengthArray() {
    const MAX_NUMBER = 9;
    const maxNumberArray = Array(MAX_NUMBER)
      .fill()
      .map((v, index) => index + 1);

    return maxNumberArray;
  }

  selectRandomNumber(length) {
    const randomNumber = Math.floor(Math.random() * length);

    return randomNumber;
  }

  compareInput(answer, userInput) {
    for (let userIndex = 0; userIndex < 3; userIndex++) {
      const answerNumberIndex = answer.indexOf(userInput[userIndex]);
      if (answerNumberIndex >= 0) {
        answerNumberIndex === userIndex ? this.strike++ : this.ball++;
      }
    }
  }

  gameFinish() {
    const resultDiv = document.body.querySelector("#result");

    resultDiv.innerHTML = `<h3>🎉정답을 맞추셨습니다!🎉</h3> 
    <div id=restart-text>게임을 새로 시작하시겠습니까? </div>`;
    this.runningGame = false;

    return this.reStartButton();
  }

  reStartButton() {
    const restartDiv = document.body.querySelector("#restart-text");
    const reStartButton = document.createElement("button");
    reStartButton.id = "game-restart-button";
    reStartButton.innerText = "게임 재시작";
    restartDiv.appendChild(reStartButton);

    return reStartButton.addEventListener("click", this.gameReStart.bind(this));
  }

  gameReStart() {
    const userInput = document.body.querySelector("#user-input");
    const resultDiv = document.body.querySelector("#result");

    while (resultDiv.firstChild) {
      resultDiv.removeChild(resultDiv.firstChild);
    }

    userInput.value = "";
    this.runningGame = true;

    return (this.answer = this.makeOnAnswer());
  }

  isInputRight() {
    const userInput = document.body.querySelector("#user-input");
    const { value } = userInput;

    if (value.match(/[^1-9]/g)) return alert("숫자가 아닙니다.");
    if (value.length !== new Set(value).size) {
      return alert("숫자가 중복됩니다.");
    }
    if (value.length !== 3) return alert("3자리의 숫자를 입력해주세요.");

    return true;
  }

  play(computerInputNumbers, userInputNumbers) {
    this.initValue();
    this.compareInput(computerInputNumbers, userInputNumbers);

    if (!this.strike && !this.ball) return "낫싱";
    if (!this.strike) return `${this.ball}볼`;
    if (!this.ball) return `${this.strike}스트라이크`;
    return `${this.ball}볼 ${this.strike}스트라이크`;
  }

  showResultOnScreen(resultText) {
    const resultDiv = document.body.querySelector("#result");
    resultDiv.innerText = resultText;

    if (this.strike === 3) {
      return this.gameFinish();
    }
  }
}
