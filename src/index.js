import {
  InputError, RangeError, LengthError, DuplicationError,
} from './input-error.js';

export default class BaseballGame {
  constructor(app) {
    this._app = app;
    app.onclick = this.onClick.bind(this);
    this.init();
  }

  init() {
    this.isEnd = false;
    this.computerInputNumbers = this.getRandomNumbers();
  }

  start() {
    alert('start');
  }

  restart() {
    alert('restart');
  }

  checkValid(inputNumbers) {
    const regex = /^[1-9]*$/g;

    if (!regex.test(inputNumbers)) {
      throw new RangeError();
    } else if (inputNumbers.length !== 3) {
      throw new LengthError();
    } else if (this.isDuplicate(inputNumbers)) {
      throw new DuplicationError();
    }
  }

  isDuplicate(inputNumbers) {
    return inputNumbers.split('').some((number) =>
      inputNumbers.indexOf(number) !== inputNumbers.lastIndexOf(number),
    );
  }

  getCountBallAndStrike(computerInputNumbers, userInputNumbers) {
    const count = {
      ball: 0,
      strike: 0,
    };

    computerInputNumbers.forEach((computerInputNumber, computerNumberIndex) => {
      const userNumberIndex = userInputNumbers.indexOf(computerInputNumber);

      if (userNumberIndex === -1) {
        return;
      }

      if (userNumberIndex === computerNumberIndex) {
        ++count.strike;
      } else {
        ++count.ball;
      }
    });

    return count;
  }

  getRandomNumbers(min = 1, max = 9) {
    const numbers = [];

    while (numbers.length < 3) {
      const randomNumber = Math.floor(Math.random() * (max - min) + min);

      if (numbers.indexOf(randomNumber) === -1) {
        numbers.push(randomNumber);
      }
    }

    return numbers;
  }

  onClick(event) {
    const targetId = event.target.id;

    if (targetId === 'submit') {
      this.start();
    }

    if (targetId === 'game-restart-button') {
      this.restart();
    }
  }
}

new BaseballGame(document.getElementById('app'));
