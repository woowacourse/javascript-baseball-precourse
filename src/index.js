export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = [];

    this.init();
  }

  init = () => {
    this.computerInputNumbers = this.setRandomNumbers();
  };

  setRandomNumbers() {
    const randomNumbers = [];
    while (randomNumbers.length != 3) {
      const number = Math.floor(Math.random() * 9) + 1;
      if (!randomNumbers.includes(number)) randomNumbers.push(number);
    }
    return randomNumbers;
  }
}
