export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = []
    this.userInputNumbers = []
    this.isRestart = false
  }

  inputValidation(string) {
    const stringToNumber = Number(string)
    if (isNaN(stringToNumber)) {
      return true
    }
    if (stringToNumber < 100 || stringToNumber > 999) {
      return true
    }
    if (string.indexOf("0") > -1) {
      return true
    }
    const NumberList = string.split("")
    const isDuplicateNumber = NumberList.some((number) => NumberList.indexOf(number) !== NumberList.lastIndexOf(number))
    if (isDuplicateNumber) {
      return true
    }
    return false
  }
  getUserInputNumbers() {
    const userInput = document.getElementById("user-input")
    const userInputString = userInput.value
    const isVaildate = this.inputValidation(userInputString)
    if (isVaildate) {
      alert("주의사항에 맞게 다시 입력해주세요.")
      userInput.value = ""
      return
    }
    this.userInputNumbers = userInputString.split("")
    const result = document.getElementById("result")
    result.innerHTML = this.play(this.computerInputNumbers, this.userInputNumbers)
    const restartBtn = document.getElementById("restart")
    if (restartBtn) {
      restartBtn.addEventListener("click", () => this.init())
      this.isRestart = true
    }
  }
  setBtnEventListener() {
    const submitBtn = document.getElementById("submit")
    submitBtn.addEventListener("click", () => this.getUserInputNumbers())
  }
  init() {
    this.computerInputNumbers = this.createRandomNumbers()
    if (!this.isRestart) {
      this.setBtnEventListener()
    }
    const userInput = document.getElementById("user-input")
    userInput.value = ""
    const result = document.getElementById("result")
    result.innerHTML = ""
  }
  createRandomNumbers() {
    const randomNumbers = []
    while (randomNumbers.length < 3) {
      const randomNumber = (Math.floor(Math.random() * (10 - 1)) + 1).toString()
      if (randomNumbers.indexOf(randomNumber) !== -1) {
        continue
      }
      randomNumbers.push(randomNumber)
    }
    return randomNumbers
  }
  play(computerInputNumbers, userInputNumbers) {
    const strikeCount = computerInputNumbers.filter((computerNumber, index) => computerNumber === userInputNumbers[index]).length
    const ballCount = computerInputNumbers.filter((computerNumber, index) => userInputNumbers.indexOf(computerNumber) !== index && userInputNumbers.indexOf(computerNumber) > -1).length
    if (strikeCount === 3) {
      return `🎉<strong>정답을 맞추셨습니다!</strong>🎉</b></br>게임을 새로 시작하시겠습니까? <button id="restart">재시작</button>`
    }
    if (strikeCount === 0 && ballCount === 0) {
      return "낫싱"
    }
    const ballString = ballCount > 0 ? `${ballCount}볼` : ""
    const strikeString = strikeCount > 0 ? ` ${strikeCount}스트라이크` : ""
    const resultString = ballString + strikeString
    return resultString
  }
}

const game = new BaseballGame()
game.init()
