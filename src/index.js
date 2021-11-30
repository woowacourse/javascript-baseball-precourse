import { $ } from './utils/index.js';
import Computer from './computer/computer.js';
import User from './user/user.js';

export default class BaseballGame {
  constructor() {
    this.computer = new Computer();
    this.user = new User();
    this.$restartButton = $('#game-restart-button');
    this.$userInput = $('#user-input');
    this.$submit = $('#submit');
    this.$result = $('#result');
    this.$correctResult = $('#correct-result');
    this.computerInputNumbers = this.computer.generateRandomNumbers();
  }
  init() {
    this.triggerRestartEvent();
    this.triggerSubmitEvent();
  }
  triggerSubmitEvent() {
    this.$submit.addEventListener('click', (e) => this.onAnswerSubmit(e));
  }
  onAnswerSubmit(e) {
    e.preventDefault();
    const count = this.play(this.computerInputNumbers, this.$userInput.value);
    this.$result.innerHTML = count || '';
  }
  triggerRestartEvent() {
    this.$restartButton.addEventListener('click', (e) => this.onRestart(e));
  }
  onRestart(e) {
    e.preventDefault();
    this.$userInput.value = '';
    this.makeVisible('$result');
    this.computerInputNumbers = this.computer.generateRandomNumbers();
  }
  play(computerInputNumbers, userInputNumbers) {
    if (!this.user.isInputValid(userInputNumbers)) {
      return;
    }
    if (computerInputNumbers === userInputNumbers) {
      this.makeVisible('$correctResult');
      return;
    }

    const ball = this.computer.calcBall(computerInputNumbers, userInputNumbers);
    const strike = this.computer.calcStrike(computerInputNumbers, userInputNumbers);
    if (ball || strike) {
      return `${ball} ${strike}`;
    }
    return '낫싱';
  }
  makeVisible($) {
    if ($ === '$result') {
      this.$result.innerText = '';
      this.$result.style.display = 'block';
      this.$correctResult.style.display = 'none';
      return;
    }
    if ($ === '$correctResult') {
      this.$result.style.display = 'none';
      this.$correctResult.style.display = 'block';
    }
  }
}

const game = new BaseballGame();
game.init();
