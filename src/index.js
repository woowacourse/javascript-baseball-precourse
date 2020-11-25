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
  clickEventListener() {
    const submitButton = document.getElementById("submit")
    submitButton.addEventListener('click', this.submitClickEvent.bind(this))
  }
  submitClickEvent() {
    const userInput = document.getElementById("user-input")
    const inputValue = userInput.value
    const validation = this.validate(inputValue)
    if (!validation) {
      alert("잘못된 값을 입력했습니다.")
      userInput.value = ''
      return
    }
  }
  validate(value) {
    if (!value) return false
    if (value.length !== 3) return false
    if (value.match(/[^1-9]/)) return false
    const hash = {}
    for (let i = 0; i < value.length; i++) {
      if (hash[value[i]]) return false
      hash[value[i]] = 1
    }
    return true
  }
}
new BaseballGame();
