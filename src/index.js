import { numArrToNum, pickUniqueNumbersInRange } from "./utils.js";
import { ANSWER_LENGTH } from "./constants.js";

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = this.generateComputerInputNumbers();
  }

  generateComputerInputNumbers() {
    return numArrToNum(pickUniqueNumbersInRange(1, 9, ANSWER_LENGTH));
  }

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}

new BaseballGame();