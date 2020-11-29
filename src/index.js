import { text } from './constants';
import { BaseballGameView } from './modules/views';

// BaseballGame class (Model)

export default class BaseballGame {
  constructor() {
    this._computerInputNumbers = null;
    this.MAXVAL = 9;
    this.MINVAL = 1;
    this.init();
  }

  init() {
    this.randomComputerInputNumbers();
  }

  randomComputerInputNumbers() {
    const table = Array.from({ length: 10 }, () => false);
    let random = '';
    let count = 0;

    while (count < 3) {
      let idx = Math.floor(
        Math.random() * (this.MAXVAL - this.MINVAL + 1) + this.MINVAL,
      );
      if (table[idx] === false) {
        table[idx] = true;
        random += idx.toString();
        count++;
      }
    }

    this._computerInputNumbers = random;
  }

  getComputerInputNumbers() {
    return this._computerInputNumbers;
  }

  countStrikeBall(computerInputNumbers, userInputNumbers) {
    return computerInputNumbers.split('').reduce(
      (acc, curVal, curIdx) => {
        if (curVal === userInputNumbers[curIdx]) {
          acc['strike']++;
        } else if (userInputNumbers.includes(curVal)) {
          acc['ball']++;
        }
        return acc;
      },
      { strike: 0, ball: 0 },
    );
  }

  play(computerInputNumbers, userInputNumbers) {
    const { strike, ball } = this.countStrikeBall(
      computerInputNumbers,
      userInputNumbers,
    );
    let responseString = '';

    if (ball === 0 && strike === 0) {
      return text.NOTHING;
    }

    if (strike === 3) {
      return text.CORRECT;
    }

    if (ball) {
      responseString += `${ball}${text.BALL}`;
    }

    if (strike) {
      responseString += ` ${strike}${text.STRIKE}`;
    }

    return responseString;
  }
}

// start

window.addEventListener('DOMContentLoaded', () => {
  const gameModel = new BaseballGame();
  const resultDiv = document.getElementById('result');
  const userInput = document.getElementById('user-input');
  const gameView = new BaseballGameView(gameModel, resultDiv, userInput);
  const submitNumButton = document.getElementById('submit');
  submitNumButton.addEventListener(
    'click',
    gameView.handleUserInputSubmit.bind(gameView),
  );
});
