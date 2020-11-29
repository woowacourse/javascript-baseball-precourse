export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = []
  }
  init() {
    this.computerInputNumbers = this.createRandomNumbers()
  }
  createRandomNumbers() {
    const randomNumbers = []
    while (randomNumbers.length < 3) {
      const randomNumber = Math.floor(Math.random() * (10 - 1)) + 1
      if (randomNumbers.indexOf(randomNumber) !== -1) continue
      randomNumbers.push(randomNumber)
    }
    return randomNumbers
  }
  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String"
  }
}

// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }

const game = new BaseballGame()
game.init()
