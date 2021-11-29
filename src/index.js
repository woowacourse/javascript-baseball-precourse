import {
  setComputerNumber,
  getUserInput,
  countStrikeAndBall,
  getGameResultText,
} from './utils/game.js';
import { RETRY_ITEM } from './utils/constant.js';

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = setComputerNumber();
    this.$userInputText = document.querySelector('#user-input');
    this.$submitButton = document.querySelector('#submit');
    this.$gameResultContainer = document.querySelector('#result');

    this.$submitButton.addEventListener('click', () => this.startGame());
  }

  startGame() {
    const userInputNumbers = getUserInput(this.$userInputText);
    if (userInputNumbers == '') {
      return;
    }
    const gameResult = this.play(this.computerInputNumbers, userInputNumbers);
    this.showGameResult(gameResult);
  }

  play(computerInputNumbers, userInputNumbers) {
    const { strikeCount, ballCount } = countStrikeAndBall(
      computerInputNumbers,
      userInputNumbers
    );
    const gameResult = getGameResultText(strikeCount, ballCount);
    return gameResult;
  }

  showGameResult(gameResult) {
    if (gameResult === '3스트라이크') {
      this.endGame();
      return;
    }
    this.$gameResultContainer.innerHTML = `${gameResult}`;
  }

  endGame() {
    this.$gameResultContainer.innerHTML = RETRY_ITEM;
    const retryButton = document.querySelector('#retry');
    retryButton.addEventListener('click', () => this.restartGame());
  }

  restartGame() {
    this.computerInputNumbers = setComputerNumber();
    this.$gameResultContainer.innerHTML = ``;
  }
}

new BaseballGame();
