import { NUMBER_LENGTH } from '../constants/game-rule.js';
import {
  NOT_NUMERIC_MESSAGE,
  LENGTH_NOT_MATCH_MESSAGE,
  ALREADY_EXIST_MESSAGE,
  OUT_OF_RANGE_MESSAGE,
} from '../constants/alert-message.js';

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
  if (userInput.length != NUMBER_LENGTH) {
    alert(LENGTH_NOT_MATCH_MESSAGE);
  } else if (!isNumeric(userInput)) {
    alert(NOT_NUMERIC_MESSAGE);
  } else if (isDuplication(userInput)) {
    alert(ALREADY_EXIST_MESSAGE);
  } else if (userInput.includes(0)) {
    alert(OUT_OF_RANGE_MESSAGE);
  } else {
    isValid = true;
  }

  return isValid;
}
