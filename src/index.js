// export default function BaseballGame() {
//   this.play = function (computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   };
// }

export default class BaseballGame {
  constructor() {
    this.randomNumber = "";
    this.playNewGame();
    this.clickEventListener();
  }

  createRandomNumber() {
    let result = "";
    const numbers = Array.from({ length: 9 }, (_, i) => i + 1);
    while (result.length < 3) {
      const selectedNumber = numbers.splice(Math.floor(Math.random() * numbers.length), 1);
      result += selectedNumber[0].toString();
    }

    return result;
  }

  changeRestartContainerDisplay(value) {
    const restartContainer = document.getElementById("restart-container");
    restartContainer.style.display = value;
  }

  playNewGame() {
    const userInput = document.getElementById("user-input");
    userInput.value = "";
    this.changeResultContent(null)
    this.changeRestartContainerDisplay("none");
    this.randomNumber = this.createRandomNumber();
  }

  convertToString(value) {
    return typeof value === "number" ? value.toString() : value;
  }

  convertScoreToResultStr(score) {
    const scoreEntries = Object.entries(score);
    if (scoreEntries.length === 0) {
      return "낫싱";
    }

    return scoreEntries
      .sort((a, b) => a[0] === "ball" ? -1 : 1)
      .map(el => el[1] + (el[0] === "ball" ? "볼" : "스트라이크"))
      .join(" ");
  }

  correct() {
    this.changeRestartContainerDisplay("block");

    return `<strong>🎉 정답을 맞추셨습니다!🎉</strong>`;
  }

  play(computerInputNumbers, userInputNumbers) {
    if (computerInputNumbers === userInputNumbers) {
      return this.correct();
    }
    computerInputNumbers = this.convertToString(computerInputNumbers);
    userInputNumbers = this.convertToString(userInputNumbers);
    const score = {};
    let i;
    for (i = 0; i < userInputNumbers.length; i++) {
      const index = computerInputNumbers.indexOf(userInputNumbers[i]);
      if (index > -1) {
        const key = i === index ? "strike" : "ball";
        score[key] = (score[key] || 0) + 1;
      }
    }

    return this.convertScoreToResultStr(score);
  }

  changeResultContent(newContent) {
    const resultEl = document.getElementById("result");
    resultEl.innerHTML = newContent;
  }
  
  validate(value) {
    if (!value || value.length !== 3 || value.match(/[^1-9]/)) {
      return false;
    }
    const hash = {};
    let i;
    for (i = 0; i < value.length; i++) {
      if (hash[value[i]]) {
        return false;
      }
      hash[value[i]] = 1;
    }

    return true;
  }

  submitClickEvent() {
    const userInput = document.getElementById("user-input");
    const {value: inputValue} = userInput;
    const validation = this.validate(inputValue);
    if (!validation) {
      alert("잘못된 값을 입력했습니다.");
      userInput.value = "";
      
      return;
    }
    this.changeResultContent(this.play(this.randomNumber, inputValue));
  }

  clickEventListener() {
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", () => this.submitClickEvent());
    const restartButton = document.getElementById("game-restart-button");
    restartButton.addEventListener("click", () => this.playNewGame());
  }
}
new BaseballGame();
