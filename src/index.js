import { calculateResult } from './utils/calculateResult.js';
import { validateUserInput } from './utils/checkValid.js';
import { generateComputerNumber } from './utils/generateComputerNumber.js';
import { resetGame } from './utils/resetGame.js';
import { showResult } from './utils/showResult.js';

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = '';
  }

  play() {
    this.setEventListener();
    this.computerInputNumbers = generateComputerNumber();
  }

  setEventListener = () => {
    const submitButton = document.querySelector('#submit');
    const result = document.querySelector('#result');
    submitButton.addEventListener('click', this.onUserInputSubmit);
    result.addEventListener('click', this.onRestart);
  };

  onRestart = (event) => {
    if (event.target.id === 'game-restart-button') {
      this.computerInputNumbers = generateComputerNumber();
      resetGame();
    }
  };

  onUserInputSubmit = (event) => {
    event.preventDefault();
    const userInputNumbers = document.querySelector('#user-input').value;
    const alertMessage = validateUserInput(userInputNumbers);

    if (alertMessage) {
      return alert(alertMessage);
    }

    const { ballCount, strikeCount } = calculateResult(
      this.computerInputNumbers,
      userInputNumbers
    );
    showResult(ballCount, strikeCount);
  };
}

const game = new BaseballGame();
game.play();
