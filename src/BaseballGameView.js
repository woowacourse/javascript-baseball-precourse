import { $ } from './utils/index.js';
import { generateRandomNumber } from './computer/computer.js';
import User from './user/user.js';
import { BaseballGame } from './index.js';

export default class BaseballGameView {
  constructor({ $restartButton, $submit, $result, $correctResult }) {
    this.user = new User();
    this.baseballgame = new BaseballGame();
    this.$restartButton = $restartButton;
    this.$submit = $submit;
    this.$result = $result;
    this.$correctResult = $correctResult;
    this.computerInputNumbers = generateRandomNumber();
  }

  init() {
    this.triggerRestartEvent();
    this.triggerSubmitEvent();
    console.log(this.computerInputNumbers);
  }

  triggerSubmitEvent() {
    this.$submit.addEventListener('click', (e) => this.onAnswerSubmit(e));
  }

  onAnswerSubmit(e) {
    e.preventDefault();
    if (!this.user.isInputValid(this.user.getUserInputValue())) {
      return;
    }
    if (this.computerInputNumbers === this.user.getUserInputValue()) {
      this.makeVisible('$correctResult');
      return;
    }
    const count = this.baseballgame.play(this.computerInputNumbers, this.user.getUserInputValue());
    this.$result.innerHTML = count;
  }

  triggerRestartEvent() {
    this.$restartButton.addEventListener('click', (e) => this.onRestart(e));
  }

  onRestart(e) {
    e.preventDefault();
    this.user.setUserInputValue('');
    this.makeVisible('$result');
    this.computerInputNumbers = generateRandomNumber();
  }

  makeVisible($element) {
    if ($element === '$result') {
      this.showResult();
    } else if ($element === '$correctResult') {
      this.showCorrectResult();
    }
  }

  showResult() {
    this.$result.innerText = '';
    this.$result.style.display = 'block';
    this.$correctResult.style.display = 'none';
  }

  showCorrectResult() {
    this.$result.style.display = 'none';
    this.$correctResult.style.display = 'block';
  }
}

const game = new BaseballGameView({
  $restartButton: $('#game-restart-button'),
  $correctResult: $('#submit'),
  $result: $('#result'),
  $submit: $('#correct-result'),
});

game.init();
