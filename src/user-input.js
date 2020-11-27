export default function userInput() {
  let userInputValue = document.getElementById('user-input').value;

  return userInputValue;
}

export function isValidUserInput(userInputValue, userInputLength) {
  let validUserInputValueArray = [];

  if (!(String(parseInt(userInputValue)) === userInputValue)) {
    alert('숫자를 입력해 주세요!');

    return validUserInputValueArray;
  } else if (userInputValue.length !== userInputLength) {
    alert(`길이가 ${userInputLength}인 숫자를 입력해 주세요!`)

    return validUserInputValueArray;
  } else {
    validUserInputValueArray = userInputValue.split("").map(Number)

    return validUserInputValueArray;
  }
}