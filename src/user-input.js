export default function userInput() {
  let userInputValue = document.getElementById('user-input').value;

  return userInputValue;
}

export function isValidUserInput(userInputValue, userInputLength) {
  let userInputValueArray = userInputValue.split("");
  let setUserInputValueArray = [...new Set(userInputValueArray)];
  let isValid = false;

  if (userInputValueArray.includes('0')) {
    alert('0을 제외한 숫자를 입력해 주세요!');
    
  } else if (!(String(parseInt(userInputValue)) === userInputValue)) {
    alert('숫자를 입력해 주세요!');

  } else if (userInputValue.length !== userInputLength) {
    alert(`길이가 ${userInputLength}인 숫자를 입력해 주세요!`);

  } else if (userInputValueArray.length !== setUserInputValueArray.length) {
    alert(`중복이 아닌 숫자를 입력해 주세요!`);

  } else {
    isValid = true;  
  }

  return isValid;
}