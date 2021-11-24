import { state } from '../state/index.js';
import { NUMBER_LENGTH } from '../constants/game-rule.js';
import {
  NOT_NUMERIC_MESSAGE,
  LENGTH_NOT_MATCH_MESSAGE,
  ALREADY_EXIST_MESSAGE,
  OUT_OF_RANGE_MESSAGE,
} from '../constants/alert-message.js';

export function isNumeric(str) {
  let flag = true;
  for (let i = 0; i < str.length; i++) {
    if(isNaN(parseInt(str[i]))){
      flag=false;
    }
  }
  return flag;
}

export default function checkUserInputValid(userInput, userInputArray, userInputSet) {
  let isValid = false;
  if (userInput.length != NUMBER_LENGTH) {
    alert(LENGTH_NOT_MATCH_MESSAGE);
  } else if (userInputArray.length !== userInputSet.length) {
    alert(ALREADY_EXIST_MESSAGE);
  } else if (userInputArray.includes('0')) {
    alert(OUT_OF_RANGE_MESSAGE);
  } else if (!isNumeric(userInput)) {
    alert(NOT_NUMERIC_MESSAGE);
  } else {
    isValid = true;
  }

  return isValid;
}
