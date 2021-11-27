import {
  CORRECT_ANSWER_MESSAGE, DIGIT, ERROR_MESSAGE, NOTHING_MESSAGE,
} from './constants.js';
import Guide from './Guide.js';
import UserInput from './UserInput.js';

export default class BaseballGame {
  constructor() {
    this.setDOM();
    this.initGame();
  }

  setDOM() {
    document.querySelector('#submit').addEventListener('click', (e) => {
      e.preventDefault();
      if (!this.isGameOver) this.checkAnswer();
    });
    document.querySelector('#game-restart-button').addEventListener('click', () => {
      this.initGame();
    });
  }

  initGame() {
    this.computerNumbers = this.createComputerNumbers();
    this.isGameOver = false;
    UserInput.clear();
    Guide.clearResult();
    Guide.hideRestart();
  }

  createComputerNumbers() {
    const computerNumbers = [];
    while (computerNumbers.length !== 3) {
      const curNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumbers.includes(curNum)) { computerNumbers.push(curNum); }
    }
    return computerNumbers;
  }

  checkAnswer() {
    const userInputNumbers = UserInput.getNumbers();
    if (!UserInput.isValid(userInputNumbers)) {
      alert(ERROR_MESSAGE);
      UserInput.clear();
      Guide.clearResult();
    }
    const result = this.play(this.computerNumbers, userInputNumbers);
    Guide.printResult(result);
    if (result.includes('정답')) {
      this.isGameOver = true;
      Guide.showRestart();
    }
  }

  play(computerInputNumbers, userInputNumbers) {
    const numberOfBalls = this.getNumberOfBalls(computerInputNumbers, userInputNumbers);
    const numberOfStrikes = this.getNumberOfStrikes(computerInputNumbers, userInputNumbers);
    if (numberOfBalls === 0 && numberOfStrikes === 0) return NOTHING_MESSAGE;
    if (numberOfStrikes === DIGIT) return CORRECT_ANSWER_MESSAGE;

    let result = '';
    if (numberOfBalls) result += `${numberOfBalls}볼 `;
    if (numberOfStrikes) result += `${numberOfStrikes}스트라이크`;
    return result;
  }

  getNumberOfBalls(computerInputNumbers, userInputNumbers) {
    return computerInputNumbers.filter((num, idx) => {
      const indexOfUserInputNumber = userInputNumbers.indexOf(num);
      return indexOfUserInputNumber !== -1 && indexOfUserInputNumber !== idx;
    }).length;
  }

  getNumberOfStrikes(computerInputNumbers, userInputNumbers) {
    return computerInputNumbers.filter((num, idx) => num === userInputNumbers[idx]).length;
  }
}

new BaseballGame();
