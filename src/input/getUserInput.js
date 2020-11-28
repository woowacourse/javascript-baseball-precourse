import checkValidInput from './checkInput.js';

export default function userInputHandler() {
  const $userInput = document.querySelector('#user-input');
  const userInputNumbers = $userInput.value.split('').map((x) => Number(x));
  $userInput.value = '';

  if (checkValidInput(userInputNumbers)) {
    return userInputNumbers;
  }
  return false;
}

// export default function getUserInput() {
//   const $submit = document.querySelector('#submit');

//   $submit.addEventListener('click', userInputHandler);
// }

// getUserInput
