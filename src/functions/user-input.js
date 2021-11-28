import { GAME_RULE, ALERT_MESSAGE } from '../constants/index.js';
import { state } from '../state/index.js';

// 주어진 문자열이 모두 숫자인지 검사
function isNumeric(str) {
  let isNumber = true;
  let i;
  for (i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i]))) {
      isNumber = false;
    }
  }

  return isNumber;
}

// 주어진 문자열에 중복이 있는지 검사
function isDuplication(userInput) {
  const userInputArray = userInput.split('').map(x => parseInt(x));
  const userInputSet = [...new Set(userInputArray)];
  const isDuplicated = !(userInputArray.length === userInputSet.length);

  return isDuplicated;
}

// 유저 입력에 문제가 없는지 검사
export function isUserInputValid(userInput) {
  let isValid = false;
  if (userInput.length != GAME_RULE.numberLength) {
    alert(ALERT_MESSAGE.lengthNotMatch);
  } else if (!isNumeric(userInput)) {
    alert(ALERT_MESSAGE.notNumeric);
  } else if (isDuplication(userInput)) {
    alert(ALERT_MESSAGE.alreadyExist);
  } else if (userInput.includes(0)) {
    alert(ALERT_MESSAGE.outOfRange);
  } else {
    isValid = true;
  }

  return isValid;
}

export function initUserInput() {
  state.userInput = 0;
}

export function setUserInput(userInputValue) {
  state.userInput = userInputValue;
}
