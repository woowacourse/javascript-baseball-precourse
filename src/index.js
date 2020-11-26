export default function BaseballGame() {
  this.setTargetNumber = function () {
    const TargetNumber = [];

    while (TargetNumber.length < 3) {
      let randomNumber = Math.floor(Math.random() * 9) + 1;

      if (TargetNumber.indexOf(randomNumber) == -1) {
        TargetNumber.push(randomNumber);
      }
    }

    return TargetNumber;
  };

  this.isDuplication = function (userInput) {
    const inputNumber = userInput.split('')
    let checkNumber = []

    for (let i = 0; i < inputNumber.length; i++) {
      if (checkNumber.indexOf(inputNumber[i]) == -1) {
        checkNumber.push(inputNumber[i])
      }
    }

    if (checkNumber.length !== 3) {
      return true;
    }
  }

  this.getInputNumber = function () {
    const userInput = document.getElementById("user-input").value;

    if (isNaN(userInput)) {
      alert("숫자를 입력해 주세요.");
      document.getElementById("user-input").value = '';
    } else if (userInput.length !== 3 || this.isDuplication(userInput)) {
      alert("1~9까지의 수를 중복없이 3개를 작성해주세요.");
    } else {
      const inputNumber = userInput.split('').map(x => Number(x))

      return inputNumber
    }
  };

  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers)
    // return "결과 값 String";
  };

  const computerInputNumbers = this.setTargetNumber()
  const submitBtn = document.getElementById("submit");

  submitBtn.addEventListener("click", () => {
    const userInputNumbers = this.getInputNumber()

    if (userInputNumbers) {
      this.play(computerInputNumbers, userInputNumbers)
    }
  });
}

new BaseballGame();
