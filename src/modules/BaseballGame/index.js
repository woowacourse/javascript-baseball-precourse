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

  judge(computerInputNumbers, userInputNumbers) {
    let strike = 0
    let ball = 0
    let isAnswer = false
    for (let i = 0; i < 3; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strike++
      } else {
        ball++
      }
    }

    if (strike === 3) {
      isAnswer = true
    }

    return [strike, ball, isAnswer]

  }



  play(computerInputNumbers, userInputNumbers) {

    const [strike, ball, isAnswer] = this.judge(computerInputNumbers, userInputNumbers)
    return "결과 값 String";

  }

}