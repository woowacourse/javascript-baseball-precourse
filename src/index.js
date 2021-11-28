import {
  generateRandomNumber,
  parseInput,
  isNotValidInput,
  getStrikeAndBall,
} from './utils.js';
import { BASEBALL_RULE, GAME_RESULT, MESSAGE } from './constants.js';
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

  returnPlayResult(strike, ball) {
    if (strike === BASEBALL_RULE.DIGITS) {
      return GAME_RESULT.END;
    }
    if (strike && ball) {
      return `${ball}${GAME_RESULT.BALL} ${strike}${GAME_RESULT.STRIKE}`;
    }
    if (ball) {
      return `${ball}${GAME_RESULT.BALL}`;
    }
    if (strike) {
      return `${strike}${GAME_RESULT.STRIKE}`;
    }
    return GAME_RESULT.NOTHING;
  }

  play(computerInputNumbers, userInputNumbers) {
    const [strike, ball] = getStrikeAndBall(
      computerInputNumbers,
      userInputNumbers
    );
    return this.returnPlayResult(strike, ball);
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
