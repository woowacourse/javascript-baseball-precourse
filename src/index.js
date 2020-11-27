import UserInput from './components/user-input.js';
import GameResult from './components/game-result.js';
import State from './library/core/state.js';
import ComputedState from './library/core/computed-state.js';
import getRandomNumber from './library/utils/getRandomNumber.js';
import { INITIAL_STATE_NUMBER } from './library/constants/state.js';
import {
  MIN_DIGIT,
  MAX_DIGIT,
  DIGIT_COUNT,
} from './library/constants/random-number.js';

export default class BaseballGame {
  #answer;
  #userNumber;
  #playResult;

  constructor() {
    this.#answer = getRandomNumber(MIN_DIGIT, MAX_DIGIT, DIGIT_COUNT);
    this.#userNumber = new State(INITIAL_STATE_NUMBER);
    this.#playResult = new ComputedState(this.getPlayResult, [
      this.#userNumber,
    ]);
    this.initializeComponents();
  }

  getPlayResult = () => {
    if (this.#userNumber.value === INITIAL_STATE_NUMBER) {
      return '';
    }

    return this.play(this.#answer, this.#userNumber.value);
  };

  getPlayStatus(answerNumbers, userNumbers) {
    let strikes = 0;
    let balls = 0;
    answerNumbers.forEach((answerNumber) => {
      if (userNumbers.includes(answerNumber)) {
        balls++;
      }
    });
    for (let i = 0; i < answerNumbers.length; i++) {
      if (answerNumbers[i] === userNumbers[i]) {
        balls--;
        strikes++;
      }
    }
    return [strikes, balls];
  }

  play(computerInputNumbers, userInputNumbers) {
    const parsedComputerNumbers = computerInputNumbers.toString().split('');
    const parsedUserNumbers = userInputNumbers.toString().split('');
    let playResult = '';
    let strikes = 0;
    let balls = 0;
    [strikes, balls] = this.getPlayStatus(
      parsedComputerNumbers,
      parsedUserNumbers,
    );
    return playResult;
  }

  initializeComponents() {
    const $inputWrap = document.getElementById('input-wrap');
    const $result = document.getElementById('result');
    new UserInput($inputWrap, { userNumber: this.#userNumber });
    new GameResult($result, { playResult: this.#playResult });
  }
}

new BaseballGame();
