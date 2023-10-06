export const resetGame = () => {
  const result = document.querySelector('#result');
  const userInput = document.querySelector('#user-input');
  result.innerHTML = '';
  userInput.value = '';
};
