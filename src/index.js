import {
  resetInput,
  getUserInput,
  generateComputerInput,
} from './modules/input.js';
import { $ } from './modules/util.js';
import { renderResult, renderInit } from './modules/render.js';
import { checkResult } from './modules/result.js';

export default class BaseballGame {
  constructor() {
    this.computerInput = '';
    this.handleSubmit = this.handleSubmit.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }
  init() {
    const $form = $('form');
    $form.addEventListener('submit', this.handleSubmit);
    this.computerInput = generateComputerInput();
  }

  handleSubmit(event) {
    event.preventDefault();
    const playResult = this.play(this.computerInput, getUserInput());
    if (playResult) {
      renderResult(playResult);
      $('#game-restart-button') && this.addEventlistenerToRestartButton();
    }
  }

  play(computerInputNumbers, userInputNumbers) {
    return checkResult(computerInputNumbers, userInputNumbers);
  }

  restartGame() {
    resetInput();
    renderInit();
    this.computerInput = generateComputerInput();
  }

  addEventlistenerToRestartButton() {
    const $restartButton = $('#game-restart-button');
    $restartButton.addEventListener('click', this.restartGame);
  }
}

new BaseballGame().init();
