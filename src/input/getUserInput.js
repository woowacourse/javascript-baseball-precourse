import getInputValid from './getInputValid.js';
import getComputerInput from './getComputerInput.js';

function getInputValue() {
  const $userInput = document.querySelector('#user-input');

  const numbers = $userInput.value;

  if (!getInputValid(numbers)) {
    return false;
  }
  return numbers;
}

function gamePlay(computerInputNumbers, play) {
  const userInputNumbers = getInputValue();
  if (userInputNumbers) {
    play(computerInputNumbers, userInputNumbers);
  }
}

function gameRestart() {
  const $userInput = document.querySelector('#user-input');
  const $result = document.querySelector('#result');

  $userInput.readOnly = false;
  $userInput.value = '';
  $result.textContent = '';
}

export default function getUserInput(computerInputNumbers, play) {
  const $submit = document.querySelector('#submit');
  const $result = document.querySelector('#result');

  $submit.addEventListener('click', event => {
    event.preventDefault();
    gamePlay(computerInputNumbers, play);
  });
  $result.addEventListener('click', ({ target }) => {
    if (target.id === 'game-restart-button') {
      computerInputNumbers = getComputerInput();
      gameRestart();
    }
  });
}
