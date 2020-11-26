export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = this.getComputerInputNumbers();
  }

  play(computerInputNumbers, userInputNumbers) {
    return printGameResult(computerInputNumbers, userInputNumbers);
  }

  getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 9 + 1);

    return randomNumber;
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
}

const game = new BaseballGame();
console.log(game);

// Event Handler
