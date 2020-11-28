export default class BaseballGame {
  constructor() {
    this.init();
  }

  init = () => {
    this.computerInputNumbers = this.generateRandomNumbers();
  };

  generateRandomNumbers() {
    let randomNumbers = "";
    while (randomNumbers.length != 3) {
      const number = String(Math.floor(Math.random() * 9) + 1);
      if (!randomNumbers.includes(number)) randomNumbers += number;
    }
    return randomNumbers;
  }
}
const game = new BaseballGame();
console.log(game.computerInputNumbers);
