import checkValidInput from './checkInput.js';

function userInputHandler() {
  const $userInput = document.querySelector('#user-input');
  const userInputNumbers = $userInput.value.split('').map((x) => Number(x));

  return console.log(checkValidInput(userInputNumbers));
}

export default function triggerUserInput() {
  const $submit = document.querySelector('#submit');

  $submit.addEventListener('click', userInputHandler);
}
