import { parseInput, isNotValidInput } from './utils/input.js';
import {
  calculateBaseBall,
  getGameResult,
  generateRandomNumber,
} from './utils/game.js';
import {
  $,
  createElement,
  removeFirstChild,
  replaceChild,
} from './utils/dom.js';
import { GAME_RESULT, MESSAGE } from './constants.js';

export default class BaseballGame {
  constructor() {
    this._inputElem = $('user-input');
    this._submitBtn = $('submit');
    this._resultElem = $('result');
    this._answer = generateRandomNumber();
    this._init();
  }

  _init() {
    this._submitBtn.addEventListener('click', event => {
      event.preventDefault();
      this._onSubmitUserInput();
    });
  }

  _play(computerInputNumbers, userInputNumbers) {
    const [strike, ball] = calculateBaseBall(
      computerInputNumbers,
      userInputNumbers
    );
    return getGameResult(strike, ball);
  }

  _onSubmitUserInput() {
    const userInput = parseInput(this._inputElem.value);
    if (isNotValidInput(userInput)) {
      return alert(MESSAGE.NOT_VALID_INPUT);
    }
    const result = this._play(this._answer, userInput);
    this._renderResult(result);
  }

  _onClickRestartButton() {
    this._inputElem.value = '';
    removeFirstChild(this._resultElem);
    this._answer = generateRandomNumber();
  }

  _renderResult(result) {
    replaceChild(this._resultElem, createElement(result));
    if (result === GAME_RESULT.END) {
      $('game-restart-button').addEventListener('click', () => {
        this._onClickRestartButton();
      });
    }
  }
}

new BaseballGame();
