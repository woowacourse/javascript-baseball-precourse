import { generateRandomNumber, parseInput, isNotValidInput } from './utils.js';
import { MESSAGE } from './constants.js';

export default class BaseballGame {
  constructor() {
    this.inputElem = document.getElementById('user-input');
    this.submitBtn = document.getElementById('submit');
    this.answer = generateRandomNumber();
    this.init();
  }

  init() {
    this.submitBtn.addEventListener('click', (event) => {
      event.preventDefault();
      this.handleSubmit();
    });
  }

  play(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  }

  handleSubmit() {
    const userInput = parseInput(this.inputElem.value);
    if (isNotValidInput(userInput)) {
      return alert(MESSAGE.NOT_VALID_INPUT);
    }
  }
}

new BaseballGame();
