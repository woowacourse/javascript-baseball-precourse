import Computer from './computer/index.js';
import User from './user/index.js';
import { makeResultMessage, gameResult } from './utils/index.js';

export default class BaseballGame {
  constructor() {
    this.$userInput = document.getElementById('user-input');
    this.$submit = document.getElementById('submit');
    this.addEventListeners();
    this.computer = new Computer();
    this.user = new User();
  }
  play(computerInputNumbers, userInputNumbers) {
    const resultMessage = makeResultMessage(computerInputNumbers, userInputNumbers, this.user);

    return resultMessage;
  }

  onSubmitClick(event) {
    event.preventDefault();
    if (this.user.isUserInputValid()) {
      this.user.initUser();
      this.user.setNumber(this.$userInput.value);
      const resultMessage = this.play(this.computer.getNumber(), this.user.getNumber());
      gameResult(resultMessage, this.user, this.computer);
    } else {
      this.$userInput.value = '';
    }
  }
  
  addEventListeners() {
    this.$submit.addEventListener('click', event => this.onSubmitClick(event));
  }
}

new BaseballGame();
