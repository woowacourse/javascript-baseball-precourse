export function getUserInput() {
  const userInput = document.querySelector('#user-input');
  const userInputValue = userInput.value;

  return userInputValue;
}

export function clearUserInput() {
  const userInput = document.querySelector('#user-input');
  userInput.value = '';
}
