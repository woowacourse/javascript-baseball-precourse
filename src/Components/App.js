import { generateTargetNumbers } from '../utils/generateTargetNumbers.js';
import { isValidInputData } from '../utils/validations.js';

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

    if (!isValidInputData(this.userInput.value)) {
      alert('다시 입력해주세요 !');
      this.userInput.value = '';
      return;
    }

    console.log(this.userInput.value);
  }

  onKeyDown({ target, key }) {
    if (key !== 'Enter') return;

    if (!isValidInputData(target.value)) {
      alert('다시 입력해주세요 !');
      target.value = '';
      return;
    }
    console.log(target.value);
  }
}

export default BaseballGame;
