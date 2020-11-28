import {
  generateTargetNumbers,
  calculateCount,
  getHint,
} from '../utils/gameUtil.js';
import { isValidInputData } from '../utils/validations.js';

class BaseballGame {
  constructor($target) {
    this.$target = $target;
    this.userInput = document.querySelector('#user-input');
    this.tryButton = document.querySelector('#submit');
    this.resultView = document.querySelector('#result');

    this.state = {
      answer: generateTargetNumbers(),
      strike: 0,
      ball: 0,
    };

    this.bindEvents();
  }

  play(computerInputNumbers, userInputNumbers) {
    userInputNumbers = Array.from(userInputNumbers).map((num) => parseInt(num));
    this.setSate(calculateCount(computerInputNumbers, userInputNumbers));

    return this.state.strike === 3 ? '정답입니다' : getHint(this.state);
  }

  bindEvents() {
    this.$target.addEventListener('click', this.onClick.bind(this));
    this.$target.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  onClick({ target }) {
    if (target.id !== 'submit') return;

    if (!isValidInputData(this.userInput.value)) {
      alert('다시 입력해주세요 !');
      this.userInput.value = '';
      return;
    }

    console.log(this.play(this.state.answer, this.userInput.value));
  }

  onKeyDown({ target, key }) {
    if (key !== 'Enter') return;

    if (!isValidInputData(target.value)) {
      alert('다시 입력해주세요 !');
      target.value = '';
      return;
    }

    console.log(this.play(this.state.answer, target.value));
  }

  setSate(nextState) {
    const { strike, ball } = nextState;

    this.state = {
      ...this.state,
      strike,
      ball,
    };
  }

  render(hint) {}
}

export default BaseballGame;
