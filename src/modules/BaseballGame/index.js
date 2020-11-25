export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = this.getRandom()
  }

  getRandom() {
    const minVal = 1
    const maxVal = 9
    let random = ''

    for (let i = 0; i < 3; i++) {
      random += Math.floor((Math.random() * (maxVal - minVal + 1)) + minVal)
    }

    return random
  }

  play(computerInputNumbers, userInputNumbers) {
    console.log()
    return "결과 값 String";

  }

}