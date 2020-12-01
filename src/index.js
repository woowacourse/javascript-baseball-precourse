export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = []
    this.userInputNumbers = []
  }

  inputValidation(string) {
    const stringToNumber = Number(string)
    if (isNaN(stringToNumber)) return true
    if (stringToNumber < 100 || stringToNumber > 999) return true
    if (string.indexOf("0") > -1) return true
    const NumberList = string.split("")
    const isDuplicateNumber = NumberList.some((number) => NumberList.indexOf(number) !== NumberList.lastIndexOf(number))
    if (isDuplicateNumber) return true
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
  }
  setBtnEventListener() {
    const submitBtn = document.getElementById("submit")
    submitBtn.addEventListener("click", (e) => this.getUserInputNumbers())
  }
  init() {
    this.computerInputNumbers = this.createRandomNumbers()
    this.setBtnEventListener()
  }
  createRandomNumbers() {
    const randomNumbers = []
    while (randomNumbers.length < 3) {
      const randomNumber = Math.floor(Math.random() * (10 - 1)) + 1
      if (randomNumbers.indexOf(randomNumber) !== -1) continue
      randomNumbers.push(randomNumber.toString())
    }
    return randomNumbers
  }
  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String"
  }
}

const game = new BaseballGame()
game.init()
