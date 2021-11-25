export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = this.setComputerNumber();
    this.userInputText = document.querySelector('#user-input');
    this.submitButton = document.querySelector('#submit');
    this.gameResult = document.querySelector('#result');
  }

  setComputerNumber() {
    let computerInputNumbers = '';
    for (let i = 0; i < 3; i++) {
      computerInputNumbers += MissionUtils.Random.pickNumberInRange(1, 9);
    }
    console.log(`computerInput: ${computerInputNumbers}`);
    return computerInputNumbers;
  }
}

new BaseballGame();
