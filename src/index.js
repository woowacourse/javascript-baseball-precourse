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
    if (inputValue.includes('0')) {
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

  isStrike(target, idx) {
    if (this.computerInputNumbers.includes(target)) {
      if (this.computerInputNumbers.indexOf(target) === idx) {
        return true;
      }
    }
    return false;
  }

  isBall(target, idx) {
    if (this.computerInputNumbers.includes(target)) {
      if (this.computerInputNumbers.indexOf(target) !== idx) {
        return true;
      }
    }
    return false;
  }

  countStrikeAndBall(userInputNumbers) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < userInputNumbers.length; i++) {
      if (this.isStrike(userInputNumbers[i], i)) {
        strike++;
      }
      if (this.isBall(userInputNumbers[i], i)) {
        ball++;
      }
    }
    return [strike, ball];
  }

  play(computerInputNumbers, userInputNumbers) {
    console.log(`${this.computerInputNumbers} vs. ${userInputNumbers}`);
    const [strikeCount, ballCount] = this.countStrikeAndBall(userInputNumbers);
    console.log(`${ballCount}볼 ${strikeCount}스트라이크`);
    return '결과 값 String';
  }

  startGame() {
    const userInputNumbers = this.getUserInput();
    if (userInputNumbers == null) {
      return;
    }
    this.play(this.computerInputNumbers, userInputNumbers);
    this.setUserInputClean();
  }
}

new BaseballGame();
