import { getComputerInput } from './utils/getComputerInput.js';
import { clearUserInput, getUserInput } from './utils/getUserInput.js';
import { getValidatedInput } from './utils/getValidatedInput.js';
import { gameCount } from './utils/gameCount.js';
import { gameResult } from './gameResult.js';
import { restartGame } from './utils/restartGame.js';

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    const button = document.querySelector('#submit');
    const result = document.querySelector('#result');
    computerInputNumbers = getComputerInput();
    userInputNumbers = getUserInput();
    result.innerHTML = '';
    button.addEventListener('click', (e) => {
      e.preventDefault();
      if (getValidatedInput(userInputNumbers)) {
        gameCount(computerInputNumbers, userInputNumbers);
        gameResult(computerInputNumbers, userInputNumbers);
        restartGame(computerInputNumbers, userInputNumbers);
      }
      clearUserInput();
    });
  };

  this.play();
}

new BaseballGame();
