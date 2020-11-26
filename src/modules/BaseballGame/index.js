import { text } from '../../fixtrue';

export default class BaseballGame {
  constructor() {
    this._computerInputNumbers = null;
    this.init();
  }

  init() {
    this.RandomComputerInputNumbers();
  }

  RandomComputerInputNumbers() {
    const minVal = 1;
    const maxVal = 9;
    let table;
    let random = '';
    let cnt = 0;

    (table = []).length = 10;
    table.fill(false);

    while (cnt < 3) {
      let number = Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);
      if (table[number]) {
        continue;
      } else {
        table[number] = true;
        random += number;
        cnt++;
      }
    }

    this._computerInputNumbers = random;
  }

  judge(computerInputNumbers, userInputNumbers) {
    let strike = 0;
    let ball = 0;

    [...computerInputNumbers].forEach((digit, index) => {
      if (digit === userInputNumbers[index]) {
        strike++;
      } else if (userInputNumbers.includes(digit)) {
        ball++;
      }
    });

    return [strike, ball];
  }

  play(computerInputNumbers, userInputNumbers) {
    const [strike, ball] = this.judge(computerInputNumbers, userInputNumbers);
    let responseString = '';

    if (ball) {
      responseString += `${ball}${text.ball}`;
    }

    if (strike) {
      responseString += ` ${strike}${text.strike}`;
    }

    if (ball === 0 && strike === 0) {
      responseString = text.nothing;
    }

    if (strike === 3) {
      responseString = text.correct;
    }

    return responseString;
  }
}
