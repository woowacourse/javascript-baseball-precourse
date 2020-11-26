export default class BaseballGame {
  constructor() {
    this.computerInputNumber = this.getComputerInputNumbers();
  }

  play(userInputNumber, computerInputNumbers = this.computerInputNumber) {
    const userInputNumbers = this.parseUserInput(userInputNumber);
    return `${computerInputNumbers}, ${userInputNumbers}`;
  }

  parseUserInput(userInputNumberAsString) {
    const userInputNumbers = userInputNumberAsString
      .split("")
      .map((numberAsString) => parseInt(numberAsString, 10));

    return userInputNumbers;
  }

  getComputerInputNumbers() {
    const PITCH_COUNT = 3;
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

const startGame = new BaseballGame();

const userSubmitButton = document.getElementById("submit");
const userInputNumber = document.getElementById("user-input");

userSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(startGame.play(userInputNumber.value));
});

console.log(startGame);
