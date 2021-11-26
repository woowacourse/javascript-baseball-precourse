export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = this.setComputerNumber();
    this.userInputText = document.querySelector('#user-input');
    this.submitButton = document.querySelector('#submit');
    this.gameResult = document.querySelector('#result');

    this.submitButton.addEventListener('click', () => this.startGame());
  }

  setComputerNumber() {
    let computerInputNumbers = [];
    let randomNumber;
    while (computerInputNumbers.length < 3) {
      randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerInputNumbers.includes(randomNumber)) {
        computerInputNumbers.push(randomNumber);
      }
    }
    console.log(`computerInput: ${computerInputNumbers.join('')}`);
    return computerInputNumbers.join('');
  }

  isValidNumber(inputValue) {
    if (inputValue.length !== 3) {
      return false;
    }
    if (isNaN(inputValue)) {
      return false;
    }
    return true;
  }

  getUserInput() {
    const inputValue = this.userInputText.value;
    if (this.isValidNumber(inputValue)) {
      return inputValue;
    }
    alert(`error input`);
    return null;
  }

  setUserInputClean() {
    this.userInputText.value = '';
  }

  play(computerInputNumbers, userInputNumbers) {
    console.log(`${computerInputNumbers} vs. ${userInputNumbers}`);
    return '결과 값 String';
  }

  startGame() {
    this.play(this.computerInputNumbers, this.getUserInput());
    this.setUserInputClean();
  }
}

new BaseballGame();
