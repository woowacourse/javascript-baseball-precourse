export default class GameModel {
  constructor() {
    this.computerInputNumbers = '';
    this.userInputNumbers = '';
  }

  setUserInputNumbers(value) {
    this.userInputNumbers = value;
  }

  getUserInputNumbers() {
    return this.userInputNumbers;
  }

  setComputerInputNumbers(value) {
    this.computerInputNumbers = value;
  }

  getComputerInputNumbers() {
    return this.computerInputNumbers;
  }
}
