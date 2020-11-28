export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = '';
    this.startNewGame();
  }

  startNewGame = () => {
    this.computerInputNumbers = this.createComputerInputNumbers();
    console.log(this.computerInputNumbers);
  }

  createComputerInputNumbers = () => {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let computerNumbers = '';
    while (computerNumbers.length !== 3) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      computerNumbers += numbers[randomIndex];
      numbers.splice(randomIndex, 1);
    }

    return computerNumbers;
  }

  play(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  }
}

new BaseballGame();
