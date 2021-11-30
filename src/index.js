import { CONSTRAIN, COUNT } from './utils/constant.js';

export default class BaseballGame {
  constructor() {
    this.ballCount = {
      strike: 0,
      ball: 0,
    };
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
}

const game = new BaseballGame();
