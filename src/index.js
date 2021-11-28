import { numArrToNum, pickUniqueNumbersInRange } from "./utils.js";
import { ANSWER_LENGTH, ELEMENT_IDS } from "./constants.js";
import Validator from "./validator.js";

export default class BaseballGame {
  constructor() {
    const { USER_INPUT, SUBMIT } = ELEMENT_IDS;
    this.computerInputNumbers = this.generateComputerInputNumbers();
    this.$userInput = document.querySelector(`#${USER_INPUT}`);
    this.$submitBtn = document.querySelector(`#${SUBMIT}`);
    this.registerSubmitEventListener();
  }

  registerSubmitEventListener() {
    this.$submitBtn.addEventListener('click', () => this.handleSubmit());
  }

  handleSubmit() {
    const userInputString = this.$userInput.value;
    const { result, message } = Validator.isValid(userInputString);
    if (!result) {
      alert(message);
      return;
    }
  }

  generateComputerInputNumbers() {
    return numArrToNum(pickUniqueNumbersInRange(1, 9, ANSWER_LENGTH));
  }

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}

new BaseballGame();