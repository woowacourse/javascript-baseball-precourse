export default function userInput() {
  let userInputValue = document.getElementById('user-input').value;

  return userInputValue;
}

export function isValidUserInput(userInputValue) {
  if (!(String(parseInt(userInputValue)) === userInputValue)) {
    alert('숫자를 입력해 주세요!');
  }
}