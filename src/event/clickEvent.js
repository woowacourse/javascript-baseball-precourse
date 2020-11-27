import getUserInput from '../input/userInput.js';

export default function clickEvent() {
  const $submit = document.querySelector('#submit');

  $submit.addEventListener('click', getUserInput);
}
