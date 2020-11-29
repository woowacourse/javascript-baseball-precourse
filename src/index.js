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

  getStrikeCount(answerNumbers, userNumbers) {
    let strikeCount = 0;
    answerNumbers.forEach((answerNumber, index) => {
      if (answerNumber === userNumbers[index]) {
        strikeCount++;
      }
    });

    return strikeCount;
  }

  getBallCount(answerNumbers, userNumbers) {
    let ballCount = 0;
    answerNumbers.forEach((answerNumber, index) => {
      const indexFound = userNumbers.findIndex(
        userNumber => userNumber === answerNumber,
      );
      if (indexFound !== -1 && indexFound !== index) {
        ballCount++;
      }
    });

    return ballCount;
  }

  play(computerInputNumbers, userInputNumbers) {
    const parsedComputerNumbers = computerInputNumbers.toString().split('');
    const parsedUserNumbers = userInputNumbers.toString().split('');
    const strikeCount = this.getStrikeCount(
      parsedComputerNumbers,
      parsedUserNumbers,
    );
    const ballCount = this.getBallCount(
      parsedComputerNumbers,
      parsedUserNumbers,
    );

    return this.createPlayResult(strikeCount, ballCount);
  }

  createPlayResult(strikeCount, ballCount) {
    const MAX_STRIKE_COUNT = 3;
    const MIN_STRIKE_COUNT = 0;
    const MIN_BALL_COUNT = 0;
    let playResult = '';
    if (strikeCount === MAX_STRIKE_COUNT) {
      playResult = VICTORY_MESSAGE;
    }
    if (strikeCount === MIN_STRIKE_COUNT && ballCount === MIN_BALL_COUNT) {
      playResult = NOTHING_MESSAGE;
    }
    if (ballCount > MIN_BALL_COUNT) {
      playResult = ballCount.toString() + BALL_MESSAGE;
    }
    if (ballCount > MIN_BALL_COUNT && strikeCount > MIN_BALL_COUNT) {
      playResult += ' ';
    }
    if (strikeCount > MIN_STRIKE_COUNT && strikeCount < MAX_STRIKE_COUNT) {
      playResult += strikeCount.toString() + STRIKE_MESSAGE;
    }

    return playResult;
  }
}

new BaseballGame();
