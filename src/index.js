import {
  generateRandomNumber,
  parseInput,
  isNotValidInput,
  convertToHashMap,
} from './utils.js';
import { BASEBALL_RULL, GAME_RESULT, MESSAGE } from './constants.js';

export default class BaseballGame {
  constructor() {
    this.inputElem = document.getElementById('user-input');
    this.submitBtn = document.getElementById('submit');
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
      const userInputIndex = userInputHashMap.get(number);
      if (userInputIndex) {
        if (index === userInputIndex) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
    }
    if (strike === BASEBALL_RULL.DIGITS) return GAME_RESULT.END;
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
  }
}

new BaseballGame();
