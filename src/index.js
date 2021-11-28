import { parseInput, isNotValidInput } from './utils/input';
import {
  getStrikeAndBall,
  returnPlayResult,
  generateRandomNumber,
} from './utils/game.js';
import { GAME_RESULT, MESSAGE } from './constants.js';
import { $, createElement, removeFirstChild, replaceChild } from './dom.js';

export default class BaseballGame {
  constructor() {
    this.inputElem = $('user-input');
    this.submitBtn = $('submit');
    this.resultElem = $('result');
    this.answer = generateRandomNumber();
    this.init();
  }

  init() {
    this.submitBtn.addEventListener('click', (event) => {
      event.preventDefault();
      this.handleSubmit();
    });
  }

  play(computerInputNumbers, userInputNumbers) {
    const [strike, ball] = getStrikeAndBall(
      computerInputNumbers,
      userInputNumbers
    );
    return returnPlayResult(strike, ball);
  }

  handleSubmit() {
    const userInput = parseInput(this.inputElem.value);
    if (isNotValidInput(userInput)) {
      return alert(MESSAGE.NOT_VALID_INPUT);
    }
    const result = this.play(this.answer, userInput);
    this.renderResult(result);
  }

  restartGame() {
    this.inputElem.value = '';
    removeFirstChild(this.resultElem);
    this.answer = generateRandomNumber();
  }

  renderResult(result) {
    replaceChild(this.resultElem, createElement(result));
    if (result === GAME_RESULT.END) {
      const restartBtn = $('game-restart-button');
      restartBtn.addEventListener('click', () => {
        this.restartGame();
      });
    }
  }
}

new BaseballGame();
