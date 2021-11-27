import CompareInputNumbers from './CompareInputNumbers.js';
import { STRING } from './constant.js';
import getComputerInputNumbers from './getInputNumbers/getComputerInputNumbers.js';
import GetUserInputNumbers from './getInputNumbers/GetUserInputNumbers.js';

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = [];
    this.$submit = document.querySelector('#submit');
    this.$userInput = document.querySelector('#user-input');
    this.$result = document.querySelector('#result');
    this.hintMessage = '';
  }

  initializeUserInput() {
    this.$userInput.value = '';
    this.$userInput.focus();
  }

  onSubmitClickEvent() {
    this.$submit.addEventListener('click', event => {
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

  onGameRestartClickEvent() {
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
    if (this.hintMessage !== STRING.THREE_STRIKE) {
      this.$result.textContent = this.hintMessage;

      return this.hintMessage;
    }

    this.$result.innerHTML = STRING.CORRECT_MESSAGE;
    this.onGameRestartClickEvent();
  }

  main() {
    this.computerInputNumbers = getComputerInputNumbers();
    this.onSubmitClickEvent();
  }
}

const baseballGame = new BaseballGame();
baseballGame.main();
