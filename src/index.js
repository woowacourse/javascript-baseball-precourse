import { CONSTRAIN, COUNT } from './utils/constant.js';
import { generateRandomNumArr } from './utils/generateRandomNumArr.js';

export default class BaseballGame {
  constructor() {
    this.setRandomNums();
    this.ballCount = {
      strike: 0,
      ball: 0,
    };
  }

  setRandomNums() {
    this.randomNums = generateRandomNumArr(CONSTRAIN.INPUT_LENGTH, CONSTRAIN.MIN_OF_RANGE, CONSTRAIN.MAX_OF_RANGE);
  }

  compareNums(computerInputNumbers, userInputNumbers) {
    userInputNumbers.forEach((digit, i) => {
      const NOT_EXIST = -1;
      const indexOfUserNumDigit = i;
      const indexOfComputerNumDigit = computerInputNumbers.indexOf(digit);

      if (indexOfComputerNumDigit === NOT_EXIST) {
        return;
      }

      if (indexOfComputerNumDigit === indexOfUserNumDigit) {
        this.ballCount.strike += 1;
      } else if (indexOfComputerNumDigit !== indexOfUserNumDigit) {
        this.ballCount.ball += 1;
      }
    });
  }

  calculateResult() {
    const { ball, strike } = this.ballCount;
    let resultTxt = `${ball}${COUNT.BALL} ${strike}${COUNT.STRIKE}`;

    if (ball === 0 && strike === 0) {
      resultTxt = `${COUNT.NOTHING}`;
    } else if (ball === 0) {
      resultTxt = `${strike}${COUNT.STRIKE}`;
    } else if (strike === 0) {
      resultTxt = `${ball}${COUNT.BALL}`;
    }

    return resultTxt;
  }

  resetBallCount() {
    this.ballCount.strike = 0;
    this.ballCount.ball = 0;
  }

  play(computerInputNumbers, userInputNumbers) {
    this.compareNums(computerInputNumbers, userInputNumbers);
    const resultTxt = this.calculateResult();
    this.resetBallCount();
    return resultTxt;
  }
}

const game = new BaseballGame();
