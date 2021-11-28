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
      document.getElementById('result').innerHTML = this.play(
        this.computerInputNumbers,
        this.userInputNumbers
      );
      if (document.getElementById('game-restart-button')) {
        document.getElementById('game-restart-button').onclick =
          this.gameRestart.bind(this);
      }
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
    if (strike === 3) return this.correctAnswer();
    if (strike === 0) return `${ball}볼`;
    if (ball === 0) return `${strike}스트라이크`;
    return `${ball}볼 ${strike}스트라이크`;
  }

  correctAnswer() {
    return '<div><strong>🎉 정답을 맞추셨습니다! 🎉</strong><p>게임을 새로 시작하시겠습니까?  <button id="game-restart-button">게임 재시작</button></p></div>';
  }

  gameRestart() {
    this.computerInputNumbers = createComputerInputNumber();
    document.getElementById('result').innerHTML = '';
    document.getElementById('user-input').value = '';
  }
}

new BaseballGame();
