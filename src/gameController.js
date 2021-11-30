import getUserInput from './user/userInput.js';
import getComputerNumbers from './computer/answerGenerator.js';

const $submit = document.querySelector('#submit');
const $result = document.querySelector('#result');
const $userInput = document.querySelector('#user-input');

function restartGame() {
  $userInput.readOnly = false;
  $userInput.value = '';
  $result.textContent = '';
}

export default function playGame(computerInputNumbers, play) {
  $submit.addEventListener('click', event => {
    const userInputNumbers = getUserInput(event);

    if (userInputNumbers) {
      play(computerInputNumbers, userInputNumbers);
    }
  });
  $result.addEventListener('click', ({ target }) => {
    if (target.id === 'game-restart-button') {
      computerInputNumbers = getComputerNumbers();
      restartGame();
    }
  });
}
