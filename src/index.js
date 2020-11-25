// export default function BaseballGame() {
//   this.play = function (computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   };
// }

export default class BaseballGame {
  randomNumber = ''
  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
  createRandomNumber() {
    const numbers = Array.from({ length: 9 }, (_, i) => i + 1)
    while (this.randomNumber.length < 3) {
      const selectedNumber = numbers.splice(Math.floor(Math.random() * numbers.length), 1)
      this.randomNumber += selectedNumber[0].toString()
    }
  }
}
new BaseballGame();
