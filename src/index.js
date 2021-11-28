import checkCorrectInput from './checkCorrectInput.js';
import createComputerInputNumber from './createComputerInputNumber.js';

export default class BaseballGame {
  computerInputNumbers = createComputerInputNumber();

  userInputNumbers = [];

  constructor() {
    document.getElementById('submit').onclick = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.userInputNumbers = document
      .getElementById('user-input')
      .value.split('')
      .map(Number);
    if (!checkCorrectInput(this.userInputNumbers)) {
      alert('올바르지 않은 입력입니다. 다시 입력해주세요');
    } else {
      document.getElementById('result').innerText = this.play(
        this.computerInputNumbers,
        this.userInputNumbers
      );
    }
  }

  play(computerInputNumbers, userInputNumbers) {
    let strike = 0;
    let ball = 0;
    computerInputNumbers.forEach((number, index) => {
      const currentNumIdx = userInputNumbers.findIndex(
        (item) => item === number
      );
      if (currentNumIdx !== -1) {
        if (index === currentNumIdx) strike += 1;
        else ball += 1;
      }
    });
    return this.playResult(strike, ball);
  }

  playResult(strike, ball) {
    if (strike === 0 && ball === 0) return '낫싱';
    if (strike === 3) return '정답';
    if (strike === 0) return `${ball}볼`;
    if (ball === 0) return `${strike}스트라이크`;
    return `${ball}볼 ${strike}스트라이크`;
  }
}

const player = new BaseballGame();
console.log(player);
