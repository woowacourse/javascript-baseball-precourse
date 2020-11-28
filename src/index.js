export default class BaseballGame {
  constructor() {
    this.computerNumbers = this.generateComputerNumbers();
  }

  generateComputerNumbers() {
    const numbers = [];

    while (numbers.length < 3) {
      const randomNumber = Math.floor(Math.random() * 9 + 1);
      
      if (isUniqueNumber(numbers, randomNumber)) {
        numbers.push(randomNumber);
      }
    }

    function isUniqueNumber(numbers, randomNumber) {
      return numbers.every((number) => number !== randomNumber);
    }
    
    return numbers;
  }

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}

new BaseballGame();
