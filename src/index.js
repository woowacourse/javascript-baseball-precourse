export default class BaseballGame {
  constructor() {
    this.$result = document.getElementById('result');
    this.$userInput = document.getElementById('user-input');
    this.$submit = document.getElementById('submit');
    this.$submit.addEventListener('click', this.handleClickSubmit);

    this.computerInputNumbers = '';
    this.startNewGame();
  }

  startNewGame = () => {
    this.computerInputNumbers = this.createComputerInputNumbers();
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

  handleClickSubmit = () => {
    const userInputNumbers = this.$userInput.value;

    if (this.isPossible(userInputNumbers)) {
      console.log('game start');
    } else {
      console.log('error');
    }
  }

  isThreeDigitNumber = (numbers) => {
    return /^[1-9]{3}$/g.test(numbers);
  }

  isNotDuplicate = (numbers) => {
    function compareNumberIndex(number) {
      return numbers.indexOf(number) === numbers.lastIndexOf(number);
    }
    return numbers.split('').every(compareNumberIndex);
  }

  isPossible = (numbers) => {
    if (this.isThreeDigitNumber(numbers) && this.isNotDuplicate(numbers)) {
      return true;
    }
    return false;
  }

  play = (computerInputNumbers, userInputNumbers) => {
    return '결과 값 String';
  }
}

new BaseballGame();
