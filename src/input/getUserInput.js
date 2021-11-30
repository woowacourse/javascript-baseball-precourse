import isValidInput from './isValidInput.js';
import alertErrorMessage from '../view/alertErrorMessage.js';

export default function getUserInput() {
  let userInput = null;
  const userInputArray = document.getElementById('user-input').value.split('');
  if (alertErrorMessage(isValidInput(userInputArray))) {
    userInput = userInputArray;
  }
  return Number(userInput?.join(''));
}
