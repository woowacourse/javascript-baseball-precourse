export default class BaseballGame {
  constructor() {
    this.answerNumbers = this.getComputerNumbers();
    this.result = document.getElementById("result");
    this.submit = document.getElementById("submit");
    this.submit.addEventListener("click", this.handleSubmit.bind(this));
    this.isGameEnd = false;

    console.log(this.answerNumbers);
  }

  getRandomIntInclusive() {
    return Math.floor(Math.random() * 9) + 1;
  }

  getComputerNumbers() {
    const numberList = [];
    while (numberList.length < 3) {
      const getRandomNumber = this.getRandomIntInclusive();
      if (!numberList.includes(getRandomNumber))
        numberList.push(getRandomNumber);
    }
    return numberList.join("");
  }

  isCorrectNumberOfDigits(input) {
    if (input[0] === input[1] || input[1] === input[2] || input[0] === input[2])
      return true;
    return false;
  }

  isValuedInputNumber(input) {
    const inputNumber = Number(input);
    if (
      Number.isNaN(inputNumber) ||
      input.includes("0") ||
      inputNumber < 123 ||
      inputNumber > 987 ||
      this.isCorrectNumberOfDigits(input)
    )
      return false;

    return true;
  }

  handleSubmit(e) {
    const userInput = document.getElementById("user-input").value.trim();
    document.getElementById("user-input").value = "";
    console.log(userInput);

    if (this.isGameEnd) return;
    if (!this.isValuedInputNumber(userInput))
      return alert("잘못된 입력값 입니다");

    this.render(this.play(this.answerNumbers, userInput), userInput);
  }

  play(computerInputNumbers, userInputNumbers) {
    if (computerInputNumbers === userInputNumbers) return this.correctAnswer();

    let ballCount = 0;
    let strikeCount = 0;

    for (let i = 0; i < 3; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strikeCount++;
        continue;
      }
      if (computerInputNumbers.includes(userInputNumbers[i])) ballCount++;
    }

    return this.incorrectAnswer(ballCount, strikeCount);
  }

  correctAnswer() {}

  incorrectAnswer(ballCount, strikeCount) {}

  render(resultValue, inputNumbers) {
    const newDiv = document.createElement("div");
    newDiv.className = "result-box";
    newDiv.innerHTML = `
        <hr align=left width=200/>
        <input type="text" value="${inputNumbers}" />
        <button id="submit">확인</button>
        <h3>📄 결과</h3>
        <p>
          ${resultValue}
        </p>
        `;
    this.result.appendChild(newDiv);
    this.gameRestartButton();
  }

  gameRestartButton() {
    const restartBtn = document.getElementById("game-restart-button");
    if (restartBtn !== null) {
      this.isGameEnd = true;
      restartBtn.addEventListener("click", this.reset.bind(this));
    }
  }

  reset(e) {
    this.result.innerHTML = "";
    this.answerNumbers = this.getComputerNumbers();
    this.isGameEnd = false;
    console.log(this.answerNumbers);
  }
}

new BaseballGame();
