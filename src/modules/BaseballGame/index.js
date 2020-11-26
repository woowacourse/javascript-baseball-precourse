import { text } from '../../fixtrue';

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = null;
  }

  RandomComputerInputNumbers() {
    const minVal = 1;
    const maxVal = 9;
    let random = '';
    let table;
    (table = []).length = 10;
    table.fill(false);

    let cnt = 0;
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

    return random;
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

  resetInputNumbers() {
    const userInput = document.getElementById('user-input');
    userInput.value = '';
  }

  restart() {
    this.resetInputNumbers();
    this.cleanResult();
    this.computerInputNumbers = this.RandomComputerInputNumbers();
  }
}
