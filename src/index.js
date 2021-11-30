import { $result, $userInputBtn, $userInput } from './domElement.js';
import { CONSTRAIN, COUNT } from './utils/constant.js';
import { generateRandomNumArr } from './utils/generateRandomNumArr.js';
import { getUserInput } from './getUserInput.js';
import { renderGameResult } from './renderGameResult.js';

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

  onUserInputSubmit() {
    $userInputBtn.addEventListener('click', e => {
      e.preventDefault();
      const userInputNumbers = getUserInput($userInput.value);
      const computerInputNumbers = this.randomNums;

      if (userInputNumbers !== null) {
        const gameResult = this.play(computerInputNumbers, userInputNumbers);
        renderGameResult($result, gameResult);
      }
    });
  }

  onRestartBtnClick() {
    $result.addEventListener('click', e => {
      if (e.target.id === 'game-restart-button') {
        this.setRandomNums();
        $result.innerHTML = '';
        $userInput.value = '';
      }
    });
  }

  init() {
    this.onUserInputSubmit();
    this.onRestartBtnClick();
  }
}

const game = new BaseballGame();
game.init();
