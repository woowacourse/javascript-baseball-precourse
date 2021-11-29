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
      this.startGame();
    }
  }

  startGame() {
    document.getElementById('result').innerHTML = this.play(
      this.computerInputNumbers,
      this.userInputNumbers
    );
    if (document.getElementById('game-restart-button') != null) {
      const restartButton = document.getElementById('game-restart-button');
      restartButton.onclick = this.gameRestart.bind(this);
    }
  }

  play(computerInputNumbers, userInputNumbers) {
    let strike = 0;
    let ball = 0;
    computerInputNumbers.forEach((number, index) => {
      const playResult = this.checkPlayResult(userInputNumbers, number, index);
      if (playResult === 'strike') {
        strike += 1;
      }
      if (playResult === 'ball') {
        ball += 1;
      }
    });
    return this.printResult(strike, ball);
  }

  checkPlayResult(userInputNumbers, number, index) {
    const currentNumIdx = userInputNumbers.findIndex((item) => item === number);
    if (currentNumIdx !== -1) {
      if (index === currentNumIdx) return 'strike';
      return 'ball';
    }
    return '';
  }

  printResult(strike, ball) {
    let printResultString = '';
    if (ball !== 0) {
      printResultString += `${ball}볼`;
      if (strike !== 0) printResultString += ' ';
    }
    if (strike !== 0) printResultString += `${strike}스트라이크`;
    if (printResultString === '') return '낫싱';
    if (printResultString === '3스트라이크') return this.correctAnswer();
    return printResultString;
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

const player = new BaseballGame();
