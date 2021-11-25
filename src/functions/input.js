import { state } from '../state/index.js';
import { RANGE_MIN, RANGE_MAX, NUMBER_LENGTH } from '../constants/game-rule.js';
import {
  NOT_NUMERIC_MESSAGE,
  LENGTH_NOT_MATCH_MESSAGE,
  ALREADY_EXIST_MESSAGE,
  OUT_OF_RANGE_MESSAGE,
} from '../constants/alert-message.js';

function checkNumeric(str) {
  let isNumeric = true;
  for (let i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i]))) {
      // 문자라면
      isNumeric = false;
    }
  }

  return isNumeric;
}

function checkDuplication(userInput) {
  const userInputArray = userInput.split('').map(x => parseInt(x));
  const userInputSet = [...new Set(userInputArray)];
  const isDuplicated = !(userInputArray.length === userInputSet.length);

  return isDuplicated;
}

export function checkUserInputValid(userInput) {
  let isValid = false;
  if (userInput.length != NUMBER_LENGTH) {
    alert(LENGTH_NOT_MATCH_MESSAGE);
  } else if (checkDuplication(userInput)) {
    alert(ALREADY_EXIST_MESSAGE);
  } else if (userInput.includes(0)) {
    alert(OUT_OF_RANGE_MESSAGE);
  } else if (!checkNumeric(userInput)) {
    alert(NOT_NUMERIC_MESSAGE);
  } else {
    isValid = true;
  }

  return isValid;
}

export function initUserComputerInput() {
  state.userInput = 0;
  state.computerInput = 0;
}

export function makeRandomNumber() {
  let randomNumberString = '';
  while (randomNumberString.length < NUMBER_LENGTH) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(RANGE_MIN, RANGE_MAX);
    if (!randomNumberString.includes(randomNumber)) {
      randomNumberString += randomNumber;
    }
  }

  return parseInt(randomNumberString);
}
