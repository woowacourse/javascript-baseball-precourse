import getInputValid from './getInputValid.js';

function getInputValue() {
  const $userInput = document.querySelector('#user-input');

  const numbers = $userInput.value;

  if (!getInputValid(numbers)) {
    return false;
  }
  return numbers;
}

export default function getUserInput(computerInputNumbers, play) {
  const $submit = document.querySelector('#submit');

  $submit.addEventListener('click', event => {
    event.preventDefault();

    const userInputNumbers = getInputValue();
    if (userInputNumbers) {
      play(computerInputNumbers, userInputNumbers);
    }
  });
}
