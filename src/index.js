export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = this.setComputerNumber();
    this.userInputText = document.querySelector('#user-input');
    this.submitButton = document.querySelector('#submit');
    this.gameResult = document.querySelector('#result');
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
}

new BaseballGame();
