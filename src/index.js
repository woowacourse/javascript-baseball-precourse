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
import {
  VICTORY_MESSAGE,
  NOTHING_MESSAGE,
  STRIKE_MESSAGE,
  BALL_MESSAGE,
} from './library/constants/playResult.js';

export default class BaseballGame {
  #answer;
  #userNumber;
  #playResult;

  constructor() {
    this.setAnswer();
    this.initializeStates();
    this.initializeComponents();
  }

  setAnswer = () => {
    this.#answer = getRandomNumber(MIN_DIGIT, MAX_DIGIT, DIGIT_COUNT);
  };

  initializeStates = () => {
    this.#userNumber = new State(INITIAL_STATE_NUMBER);
    this.#playResult = new ComputedState(this.getPlayResult, [
      this.#userNumber,
    ]);
  };

  initializeComponents() {
    const $inputWrap = document.getElementById('input-wrap');
    const $result = document.getElementById('result');
    new UserInput($inputWrap, {
      userNumber: this.#userNumber,
    });
    new GameResult($result, {
      playResult: this.#playResult,
      restart: this.restart,
    });
  }

  restart = () => {
    this.setAnswer();
    this.#userNumber.value = INITIAL_STATE_NUMBER;
  };

  getPlayResult = () => {
    if (this.#userNumber.value === INITIAL_STATE_NUMBER) {
      return '';
    }

    return this.play(this.#answer, this.#userNumber.value);
  };

  getPlayStatus(answerNumbers, userNumbers) {
    let strikeCount = 0;
    let ballCount = 0;
    answerNumbers.forEach(answerNumber => {
      if (userNumbers.includes(answerNumber)) {
        ballCount++;
      }
    });
    for (let i = 0; i < answerNumbers.length; i++) {
      if (answerNumbers[i] === userNumbers[i]) {
        ballCount--;
        strikeCount++;
      }
    }

    return [strikeCount, ballCount];
  }

  play(computerInputNumbers, userInputNumbers) {
    const parsedComputerNumbers = computerInputNumbers.toString().split('');
    const parsedUserNumbers = userInputNumbers.toString().split('');
    let strikeCount = 0;
    let ballCount = 0;
    [strikeCount, ballCount] = this.getPlayStatus(
      parsedComputerNumbers,
      parsedUserNumbers,
    );

    return this.createPlayResult(strikeCount, ballCount);
  }

  createPlayResult(strikeCount, ballCount) {
    let playResult = '';
    if (strikeCount === 3) {
      playResult = VICTORY_MESSAGE;
    }
    if (strikeCount === 0 && ballCount === 0) {
      playResult = NOTHING_MESSAGE;
    }
    if (ballCount > 0) {
      playResult = ballCount.toString() + BALL_MESSAGE;
    }
    if (ballCount > 0 && strikeCount > 0) {
      playResult += ' ';
    }
    if (strikeCount > 0 && strikeCount < 3) {
      playResult += strikeCount.toString() + STRIKE_MESSAGE;
    }

    return playResult;
  }
}

new BaseballGame();
