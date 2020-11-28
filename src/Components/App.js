import {
  generateTargetNumbers,
  calculateCount,
  getHint,
} from '../utils/gameUtil.js';
import { isValidInputData } from '../utils/validations.js';
import { ID, GAME, MESSAGE, KEY } from '../utils/constants.js';

class BaseballGame {
  constructor($target) {
    this.$target = $target;
    this.$userInput = document.getElementById(ID.USER_INPUT);
    this.$tryButton = document.getElementById(ID.SUBMIT_BUTTON);
    this.$resultView = document.getElementById(ID.RESULT_VIEW);

    this.state = {
      answer: generateTargetNumbers(),
      strike: 0,
      ball: 0,
    };

    this.bindEvents();
    this.render('');
  }

  play(computerInputNumbers, userInputNumbers) {
    userInputNumbers = Array.from(userInputNumbers).map((num) => parseInt(num));
    const countInfo = calculateCount(computerInputNumbers, userInputNumbers);
    this.setSate({
      answer: this.state.answer,
      ...countInfo,
    });

    if (this.state.strike === GAME.THREE) {
      this.$tryButton.disabled = true;
    }
    return getHint(this.state);
  }

  restart() {
    this.$userInput.value = '';
    this.$userInput.focus();
    this.$tryButton.disabled = false;

    this.setSate({
      answer: generateTargetNumbers(),
      strike: 0,
      ball: 0,
    });
    this.render('');
  }

  bindEvents() {
    this.$target.addEventListener('click', this.onClick.bind(this));
    this.$target.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  onClick({ target }) {
    if (target.id !== ID.RESTART_BUTTON && target.id !== ID.SUBMIT_BUTTON)
      return;

    if (target.id === ID.RESTART_BUTTON) {
      this.restart();
      return;
    }

    if (!isValidInputData(this.$userInput.value)) {
      alert(MESSAGE.INPUT_ERROR);
      this.$userInput.value = '';
      return;
    }

    const hint = this.play(this.state.answer, this.$userInput.value);
    this.render(hint);
  }

  onKeyDown({ target, key }) {
    if (key !== KEY.ENTER) return;

    if (!isValidInputData(target.value)) {
      alert(MESSAGE.INPUT_ERROR);
      target.value = '';
      return;
    }

    const hint = this.play(this.state.answer, target.value);
    this.render(hint);
  }

  setSate({ answer, strike, ball }) {
    this.state = {
      ...this.state,
      answer,
      strike,
      ball,
    };
  }

  render(message) {
    this.$resultView.innerHTML =
      this.state.strike === GAME.THREE
        ? `<p>${message}</p>
           <span>${MESSAGE.RESTART}</span> <button id=${ID.RESTART_BUTTON}>재시작</button>`
        : `<p>${message}</p>`;
  }
}

export default BaseballGame;
