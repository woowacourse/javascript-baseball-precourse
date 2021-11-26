import CompareInputNumbers from './compareInputNumbers.js';
import getComputerInputNumbers from './getInputNumbers/getComputerInputNumbers.js';
import GetUserInputNumbers from './getInputNumbers/getUserInputNumbers.js';

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = [];
    this.$submit = document.querySelector('#submit');
    this.$userInput = document.querySelector('#user-input');
    this.$result = document.querySelector('#result');
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
      const getUserInputNumbers = new GetUserInputNumbers(this.$userInput);
      const userInput = getUserInputNumbers.main();
      if (typeof userInput === 'string') {
        this.initializeUserInput();
        alert(userInput);
        return;
      }
      this.play(this.computerInputNumbers, userInput);
    });
  }

  gameRestartClickEvent() {
    const $gameRestartButton = document.querySelector('#game-restart-button');
    $gameRestartButton.addEventListener('click', () => {
      this.initializeUserInput();
      this.$result.innerHTML = '';
      this.computerInputNumbers = getComputerInputNumbers();
    });
  }

  play(computerInputNumbers, userInputNumbers) {
    const compareInputNumbers = new CompareInputNumbers(
      computerInputNumbers,
      userInputNumbers,
    );
    this.hintMessage = compareInputNumbers.main();
    if (this.hintMessage !== '3스트라이크') {
      this.$result.textContent = this.hintMessage;
      return this.hintMessage;
    }
    this.$result.innerHTML = this.correctMessage;
    this.gameRestartClickEvent();
  }

  main() {
    this.computerInputNumbers = getComputerInputNumbers();
    this.submitClickEvent();
  }
}

const baseballGame = new BaseballGame();
baseballGame.main();
