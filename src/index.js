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

  isValuedInputNumber(input) {
    const inputNumber = Number(input);
    if (
      Number.isNaN(inputNumber) ||
      input.includes("0") ||
      inputNumber < 123 ||
      inputNumber > 987
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
  }

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}

new BaseballGame();
