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
      .value.split('');
    if (!checkCorrectInput(this.userInputNumbers)) {
      alert('올바르지 않은 입력입니다. 다시 입력해주세요');
    } else {
      console.log(this);
      this.play(this.computerInputNumbers, this.userInputNumbers);
    }
  }

  play(computerInputNumbers, userInputNumbers) {
    return this;
  }
}

const player = new BaseballGame();
console.log(player);
