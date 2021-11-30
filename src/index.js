import { $ } from './utils/index.js';
import { generateComputerValue } from './computer/computer.js';
import User from './user/user.js';
import { BaseballGame } from './BaseballGame.js';

// const $restartButton = $('#game-restart-button');
// const $submit = $('#submit');
// const $result = $('#result');
// const $correctResult = $('#correct-result');

export default class BaseballGameView {
  constructor() {
    this.user = new User();
    this.baseballgame = new BaseballGame();
    this.$restartButton = $('#game-restart-button');
    this.$submit = $('#submit');
    this.$result = $('#result');
    this.$correctResult = $('#correct-result');
    this.computerInputNumbers = generateComputerValue();
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
    const count = this.baseballgame.play(this.computerInputNumbers, this.user.getUserInputValue());
    this.$result.innerHTML = count || '';
  }

  triggerRestartEvent() {
    this.$restartButton.addEventListener('click', (e) => this.onRestart(e));
  }

  onRestart(e) {
    e.preventDefault();
    this.user.setUserInputValue('');
    this.makeVisible('$result');
    this.computerInputNumbers = this.computer.generateRandomNumbers();
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

const game = new BaseballGameView();

game.init();
