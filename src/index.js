import { numArrToNum, pickUniqueNumbersInRange } from "./utils.js";
import {
  ANSWER_LENGTH,
  ELEMENT_IDS,
  GAME_CLEAR_VIEW_HTML
} from "./constants.js";
import Validator from "./validator.js";

export default class BaseballGame {
  constructor() {
    const { USER_INPUT, SUBMIT, RESULT } = ELEMENT_IDS;
    this.computerInputNumbers = this.generateComputerInputNumbers();
    this.$userInput = document.querySelector(`#${USER_INPUT}`);
    this.$submitBtn = document.querySelector(`#${SUBMIT}`);
    this.$result = document.querySelector(`#${RESULT}`);
    console.log(this.computerInputNumbers);
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
    const playResult = this.play(this.computerInputNumbers, parseInt(userInputString, 10));
    if (playResult === undefined) this.printGameClearView();
  }

  printGameClearView() {
    this.$result.innerHTML = GAME_CLEAR_VIEW_HTML;
  }

  generateComputerInputNumbers() {
    return numArrToNum(pickUniqueNumbersInRange(1, 9, ANSWER_LENGTH));
  }

  play(computerInputNumbers, userInputNumbers) {
    if (computerInputNumbers === userInputNumbers) return;
    return "결과 값 String";
  }
}

new BaseballGame();