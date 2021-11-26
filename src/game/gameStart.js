import getUserInputNumbers from '../input/userInputNumbers.js';
import getComputerInputNumbers from '../input/computerInputNumbers.js';
import { $submit, $result, $userInput } from '../constants/constants.js';

const gameStart = (computerInputNumbers, play) => {
  $submit.addEventListener('click', () => {
    const userInputNumbers = getUserInputNumbers();
    if (userInputNumbers) {
      play(computerInputNumbers, userInputNumbers);
    }
  });

  $result.addEventListener('click', (e) => {
    if (e.target.id === 'game-restart-button') {
      computerInputNumbers = getComputerInputNumbers();
      $result.textContent = '';
      $userInput.value = '';
    }
  });
};

export default gameStart;
