import CompareInputNumbers from './compareInputNumbers.js';
import getComputerInputNumbers from './getInputNumbers/getComputerInputNumbers.js';
import getUserInputNumbers from './getInputNumbers/getUserInputNumbers.js';
import GetResultMessage from './getResultMessage.js';

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = [];
    this.$submit = document.querySelector('#submit');
    this.$userInput = document.querySelector('#user-input');
    this.hintMessage = '';
    this.correctMessage = `
    <b>🎉 정답을 맞추셨습니다! 🎉</b>
    <br/ >
    <br/ >
    게임을 새로 시작하시겠습니까?
    <button id='game-restart-button'>게임 재시작</button>
    `;
  }

  initializeUserInput() {
    this.$userInput.value = '';
    this.$userInput.focus();
  }

  submitClickEvent() {
    this.$submit.addEventListener('click', (event) => {
      event.preventDefault();
      const userInputNumbers = getUserInputNumbers(this.$userInput);
      if (typeof userInputNumbers === 'string') {
        this.initializeUserInput();
        alert('공백 없이 중복되지 않는 숫자 3개를 입력해주세요!');
        return;
      }
      this.play(this.computerInputNumbers, userInputNumbers);
    });
  }

  play(computerInputNumbers, userInputNumbers) {
    const compareInputNumbers = new CompareInputNumbers(
      computerInputNumbers,
      userInputNumbers,
    );
    this.hintMessage = compareInputNumbers.main();
    if (this.hintMessage === '3스트라이크') {
      return;
    }
    console.log(this.hintMessage);
    return this.hintMessage;
  }

  main() {
    this.computerInputNumbers = getComputerInputNumbers();
    this.submitClickEvent();
  }
}

const baseballGame = new BaseballGame();
baseballGame.main();
