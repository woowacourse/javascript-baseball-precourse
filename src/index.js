// export default function BaseballGame() {
//   this.play = function (computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   };
// }

export default class BaseballGame {
  constructor() {
    this.answerNumbers = this.getComputerNumbers();
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

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}

new BaseballGame();
