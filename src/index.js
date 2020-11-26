const PITCH_COUNT = 3;

export default class BaseballGame {
  constructor() {
    this.computerInputNumber = this.getComputerInputNumbers();
    this.userSubmitButton = document.getElementById("submit");
    this.userInputNumber = document.getElementById("user-input");

    this.userSubmitButton.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(
        this.play(this.computerInputNumber, this.userInputNumber.value)
      );
    });
  }

  play(computerInputNumbers, userInputNumber) {
    const userInputNumbers = this.parseUserInput(userInputNumber);

    return `${computerInputNumbers}, ${userInputNumbers}`;
  }

  parseUserInput(userInputNumberAsString) {
    const userInputNumbers = userInputNumberAsString
      .split("")
      .map((numberAsString) => parseInt(numberAsString, 10));

    if (this.isInputError(userInputNumbers)) {
      return alert("올바르지 않은 입력입니다.");
    }

    return userInputNumbers;
  }

  isInputError(userInputNumbers) {
    console.log(userInputNumbers);
    if (
      this.isWrongNumberLength(userInputNumbers) ||
      this.isNotNumberType(userInputNumbers) ||
      this.isNumberOverlap(userInputNumbers) ||
      this.isContainZero(userInputNumbers)
    ) {
      return true;
    }
  }

  isWrongNumberLength(userInputNumbers) {
    if (userInputNumbers.length !== PITCH_COUNT) {
      console.log("Number length error");
      return true;
    }
  }

  isNotNumberType(userInputNumbers) {
    for (let pitch = 0; pitch < PITCH_COUNT; pitch++) {
      if (isNaN(userInputNumbers[0])) {
        console.log("Wrong number type");
        return true;
      }
    }
  }

  isNumberOverlap(userInputNumbers) {
    const userInputNumberSet = new Set(userInputNumbers);
    if (userInputNumbers.length !== userInputNumberSet.size) {
      console.log("Number overlap error");
      return true;
    }
  }

  isContainZero(userInputNumbers) {
    userInputNumbers.forEach((number) => {
      if (number === 0) {
        console.log("Zero error");
        return true;
      }
    });
  }

  getComputerInputNumbers() {
    let computerInputNumbers = [];
    let pitch = 0;
    let randomNumber;

    while (pitch < PITCH_COUNT) {
      randomNumber = this.getRandomNumber();
      if (!computerInputNumbers.includes(randomNumber)) {
        computerInputNumbers.push(randomNumber);
        pitch++;
      }
    }
    return computerInputNumbers;
  }

  getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 9 + 1);
    return randomNumber;
  }
}

new BaseballGame();
