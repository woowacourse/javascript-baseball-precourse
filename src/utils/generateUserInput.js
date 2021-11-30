import { $ } from './selector.js';
import userInputValidation from './userInputValidation.js';

export const generateUserInput = () => {
  const userInput = $('#user-input').value;
  let val = userInput.trim();

  const { isError, inValidText } = userInputValidation(val);

  if (isError) {
    alert(inValidText);
    $('#user-input').value = '';
    return;
  } else {
    return Number(userInput);
  }
};
