import { NUM } from "./constants.js";

export default class BaseballGame {
  constructor() {
    this.dom();
    this.getComputerNumber();
  }

  dom() {
    this.$userInput = document.querySelector("#user-input");
    this.$result = document.querySelector("#result");
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

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}

new BaseballGame();
