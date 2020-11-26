import Util from "./util.js";

export default class BaseballGame {
  DIGITS = 3;

  form = document.querySelector("#form");
  userInput = document.querySelector("#user-input");
  submitButton = document.querySelector("#submit");
  computerInputNumbers = this.createRandomNumbers();

  createRandomNumbers() {
    let result = 0;

    for (let i = 0; i < this.DIGITS; i++) {
      let randomNumber = Math.floor(Math.random() * 10);

      if (
        randomNumber === 0 ||
        Util.prototype.checkOverlap(result, randomNumber)
      ) {
        result = this.createRandomNumbers();
        return result;
      }
      result = result * 10 + randomNumber;
    }
    return result;
  }
}
