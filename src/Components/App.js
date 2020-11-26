import { generateTargetNumbers } from '../utils/generateTargetNumbers.js';

class BaseballGame {
  constructor($target) {
    this.$target = $target;
    this.userInput = document.querySelector('#user-input');
    this.tryButton = document.querySelector('#submit');

    this.answer = generateTargetNumbers();

    this.bindEvents();
  }

  play(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  }

  bindEvents() {
    this.$target.addEventListener('click', this.onClick.bind(this));
    this.$target.addEventListener('keydown', this.onKeyDown);
  }

  onClick({ target }) {
    if (target.id !== 'submit') return;

    console.log(this.userInput.value);
  }

  onKeyDown({ target, key }) {
    if (key !== 'Enter') return;

    console.log(target.value);
  }
}

export default BaseballGame;
