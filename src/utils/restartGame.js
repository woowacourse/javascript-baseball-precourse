import { gameCount } from './gameCount.js';
import { getComputerInput } from './getComputerInput.js';
import { clearUserInput } from './getUserInput.js';

export function restartGame(computerInput, userInput) {
  const [strikeCount, ballCount] = gameCount(computerInput, userInput);
  const restartButton = document.querySelector('#game-restart-button');
  const result = document.querySelector('#result');
  if (!(strikeCount === 0 && ballCount === 0)) {
    if (strikeCount === 3) {
      restartButton.addEventListener('click', () => {
        computerInput = '';
        result.innerHTML = '';
        clearUserInput();
        computerInput = getComputerInput();
        location.reload();
      });
    }
  }
}
