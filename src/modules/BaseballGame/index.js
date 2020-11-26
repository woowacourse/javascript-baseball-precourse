import { text } from '../../fixtrue';

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = this.getRandom();
  }

  getRandom() {
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

  cleanResult() {
    const result_div = document.getElementById('result');

    while (result_div.hasChildNodes()) {
      result_div.removeChild(result_div.firstChild);
    }
  }

  resetInputNumbers() {
    const userInput = document.getElementById('user-input');
    userInput.value = '';
  }

  restart() {
    this.resetInputNumbers();
    this.cleanResult();
    this.computerInputNumbers = this.getRandom();
  }

  renderResult(string) {
    const result_div = document.getElementById('result');
    const response_p = document.createElement('p');
    response_p.innerHTML = string;
    result_div.appendChild(response_p);

    if (string === text.correct) {
      const restart_div = document.createElement('div');
      restart_div.id = 'restart';

      let restart_p = document.createElement('p');
      restart_p.innerHTML = text.askRestart;
      restart_div.appendChild(restart_p);

      const restart_button = document.createElement('button');
      restart_button.innerHTML = text.restart;
      restart_button.id = 'game-restart-button';
      restart_button.addEventListener('click', this.restart.bind(this));
      restart_div.appendChild(restart_button);

      result_div.appendChild(restart_div);
    }
  }
}
