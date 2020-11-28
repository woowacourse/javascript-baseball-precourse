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

    console.log(this.state.answer);

    this.bindEvents();
    this.render('');
  }

  play(computerInputNumbers, userInputNumbers) {
    userInputNumbers = Array.from(userInputNumbers).map((num) => parseInt(num));
    this.setSate(calculateCount(computerInputNumbers, userInputNumbers));

    return this.state.strike === 3 ? '정답입니다' : getHint(this.state);
  }

  restart() {
    this.userInput.value = '';
    this.state = {
      answer: generateTargetNumbers(),
      strike: 0,
      ball: 0,
    };

    this.render('');
  }

  bindEvents() {
    this.$target.addEventListener('click', this.onClick.bind(this));
    this.$target.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  onClick({ target }) {
    if (target.id !== 'game-restart-button' && target.id !== 'submit') return;

    // 정답 로직
    if (target.id === 'game-restart-button') {
      this.restart();
      return;
    }

    if (!isValidInputData(this.userInput.value)) {
      alert('다시 입력해주세요 !');
      this.userInput.value = '';
      return;
    }

    const hint = this.play(this.state.answer, this.userInput.value);
    this.render(hint);
  }

  onKeyDown({ target, key }) {
    if (key !== 'Enter') return;

    if (!isValidInputData(target.value)) {
      alert('다시 입력해주세요 !');
      target.value = '';
      return;
    }

    const hint = this.play(this.state.answer, target.value);
    this.render(hint);
  }

  setSate(nextState) {
    const { strike, ball } = nextState;

    this.state = {
      ...this.state,
      strike,
      ball,
    };
  }

  render(message) {
    this.resultView.innerHTML =
      this.state.strike === 3
        ? `<span>${message}</span><button id="game-restart-button">재시작</button>`
        : `<span>${message}</span>`;
  }
}

export default BaseballGame;
