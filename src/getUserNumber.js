/*get user number*/
import {
  checkDigitsInNumberDuplicated,
  checkNumberConsistZero,
  checkNumberNotNumber,
  checkNumberlenEqualsNumLength,
  checkUserInputValid,
} from './checkUserNumber.js';

export default function getUserNumber() {
  const userInput = document.getElementById('user-input').value;
  if (checkUserInputValid(userInput)) {
    return userInput;
  }
}
