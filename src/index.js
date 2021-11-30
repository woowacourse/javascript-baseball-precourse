import { $ } from './utils/index.js';
import { generateRandomNumber } from './computer/computer.js';
import User from './user/user.js';
import { BaseballGame } from './BaseballGameView.js';

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
    const inputValue = this.user.getUserInputValue();
    if (!this.user.isInputValid(inputValue)) {
      return;
    }
    if (this.computerInputNumbers === inputValue) {
      this.makeVisible('$correctResult');
      return;
    }
    const count = this.baseballgame.play(this.computerInputNumbers, inputValue);
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
  $correctResult: $('#correct-result'),
  $result: $('#result'),
  $submit: $('#submit'),
});
console.log('game', game);
game.init();
