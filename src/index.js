import Computer from "./Computer.js";
import User from "./User.js";

export default class BaseballGame {
  constructor() {
    this.NUMBER_LENGTH = 3;
    this.computer = new Computer(this.NUMBER_LENGTH);
    this.user = new User();
    this.computerInputNumbers = this.computer.makeNumbers();
  }

  start() {
    this.computer.clearResultArea();
    this.user.button.addEventListener("click", e => this.checkValidValue(e));
  }

  checkValidValue(event) {
    event.preventDefault();
    const userInputNumbers = this.user.getInputValue();
    const isValid = this.computer.checkValidValue(userInputNumbers);
    if (isValid) {
      this.play(this.computerInputNumbers, userInputNumbers);
    }
  }

  play(computerInputNumbers, userInputNumbers) {
    return `string`;
  }
}

const baseballGame = new BaseballGame();
baseballGame.start();
