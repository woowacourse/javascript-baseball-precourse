import { NUM } from "./constants.js";
import { isValidUserInput } from "./valid.js";

export default class BaseballGame {
  constructor() {
    this.dom();
    this.addEvent();
    this.getComputerNumber();
  }

  dom() {
    this.$userForm = document.querySelector("form");
    this.$userInput = document.querySelector("#user-input");
    this.$result = document.querySelector("#result");
  }

  addEvent() {
    this.$userForm.addEventListener("submit", this.getUserNumber.bind(this));
  }

  getComputerNumber() {
    const computerNumbers = [];
    while (computerNumbers.length < NUM.MAX_LENGTH) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(
        NUM.MIN_NUMBER,
        NUM.MAX_NUMBER
      );
      if (!computerNumbers.includes(randomNumber)) {
        computerNumbers.push(randomNumber);
      }
    }

    return computerNumbers;
  }

  getUserNumber(e) {
    e.preventDefault();
    const userNumbers = this.$userInput.value
      .split("")
      .map((num) => Number(num));

    if (!isValidUserInput(userNumbers)) {
      return;
    }

    return userNumbers;
  }

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}

new BaseballGame();
