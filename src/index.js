export default class BaseballGame {
  constructor() {
    this.computerNumbers = this._makeDiffNumber()
  }

  _makeRandomValue(max, min) {
    // max ~ min 두 값 사이의 값을 출력(max, min값 포함)
    return Math.floor(Math.random() * max) + min
  }

  _makeDiffNumber(length = 3) {
    const numberSet = new Set()
    while (numberSet.size < length) {
      const randomNumber = this._makeRandomValue(9, 1)
      numberSet.add(randomNumber)
    }
    // set에서 string으로 변환
    let stringNumbers = [...numberSet].join("")
    return parseInt(stringNumbers)
  }

  _showErrorAlert(str) {
    alert(`숫자 야구 게임 에러 내용\n ${str}`)
  }

  play(computerInputNumbers, userInputNumbers) {
    const computerNumbers = computerInputNumbers || this.computerNumbers
    if (computerInputNumbers) return "결과 값 String"
  }
}
