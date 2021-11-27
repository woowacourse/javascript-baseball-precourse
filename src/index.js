import {
  generateRandomNumber,
  parseInput,
  isNotValidInput,
  convertToHashMap,
} from './utils.js';
import { BASEBALL_RULE, GAME_RESULT, MESSAGE } from './constants.js';
import { createElement } from './dom.js';

export default class BaseballGame {
  constructor() {
    this.inputElem = document.getElementById('user-input');
    this.submitBtn = document.getElementById('submit');
    this.resultElem = document.getElementById('result');
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
        if (index === userInputIndex) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
    }
    if (strike === BASEBALL_RULE.DIGITS) return GAME_RESULT.END;
    if (!strike && !ball) return GAME_RESULT.NOTHING;
    if (strike && ball)
      return `${ball}${GAME_RESULT.BALL} ${strike}${GAME_RESULT.STRIKE}`;
    return ball
      ? `${ball}${GAME_RESULT.BALL}`
      : `${strike}${GAME_RESULT.STRIKE}`;
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
    this.resultElem.removeChild(this.resultElem.firstChild);
    this.answer = generateRandomNumber();
  }

  renderResult(result) {
    if (this.resultElem.hasChildNodes())
      this.resultElem.removeChild(this.resultElem.firstChild);
    this.resultElem.appendChild(createElement('div', result));
    if (result === GAME_RESULT.END) {
      const restartBtn = document.getElementById('restart');
      restartBtn.addEventListener('click', () => {
        this.restartGame();
      });
    }
  }
}

new BaseballGame();
