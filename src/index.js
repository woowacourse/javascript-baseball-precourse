// export default function BaseballGame() {
//   this.play = function (computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   };
// }

export default class BaseballGame {
  constructor() {
    this.answerNumbers = this.getComputerNumbers();
    this.result = document.getElementById("result");
    this.submit = document.getElementById("submit");
    this.submit.addEventListener("click", this.handleSubmit.bind(this));

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

    if (!this.isValuedInputNumber(userInput))
      return alert("잘못된 입력값 입니다");

    console.log(this.play(this.answerNumbers, userInput));
  }

  play(computerInputNumbers, userInputNumbers) {
    if (computerInputNumbers === userInputNumbers)
      return `🎉 정답을 맞추셨습니다 🎉<br>게임을 새로 시작하시겠습니까? <button id="game-restart-button">게임 재시작</button>`;

    let ballCount = 0;
    let strikeCount = 0;

    for (let i = 0; i < 3; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strikeCount++;
        continue;
      }
      if (computerInputNumbers.includes(userInputNumbers[i])) ballCount++;
    }

    if (ballCount === 0 && strikeCount === 0) return "낫싱";
    if (ballCount !== 0 && strikeCount === 0) return `${ballCount}볼`;
    if (ballCount === 0 && strikeCount !== 0) return `${strikeCount}스트라이크`;
    return `${ballCount}볼 ${strikeCount}스트라이크`;
  }
}

new BaseballGame();
