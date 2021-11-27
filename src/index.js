import {
  generateRandomNumber,
  parseInput,
  isNotValidInput,
  convertToHashMap,
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

  play(computerInputNumbers, userInputNumbers) {
    let strike = 0;
    let ball = 0;

    const computerInputHashMap = convertToHashMap(computerInputNumbers);
    const userInputHashMap = convertToHashMap(userInputNumbers);

    for (const [number, index] of computerInputHashMap.entries()) {
      if (userInputHashMap.has(number)) {
        const userInputIndex = userInputHashMap.get(number);
        index === userInputIndex ? (strike += 1) : (ball += 1);
      }
    }

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
      const restartBtn = $('restart');
      restartBtn.addEventListener('click', () => {
        this.restartGame();
      });
    }
  }
}

new BaseballGame();
