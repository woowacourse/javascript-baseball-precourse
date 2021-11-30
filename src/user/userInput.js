import validateNumbers from './validateInputNumbers.js';

const $userInput = document.querySelector('#user-input');

function getInputValue() {
  const numbers = $userInput.value;

  if (!validateNumbers(numbers)) {
    return false;
  }
  return numbers;
}

export default function getUserInput(event) {
  event.preventDefault();
  return getInputValue();
}
