import { NUM_COUNT } from './constant/constant.js';
import { $ } from './util/dom.js';

export const checkUserInputNumbersCount = userInputValue => {
  if (userInputValue.length !== NUM_COUNT) {
    return true;
  }
};

export const checkUserInputNumbersContainNotNumber = userInputValue => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < NUM_COUNT; i += 1) {
    if (!num.includes(parseInt(userInputValue[i], 10))) {
      return true;
    }
  }
};

export const checkUserInputNumbersContainDuplicateNumbers = userInputValue => {
  const userInputValueArray = [];
  for (let i = 0; i < NUM_COUNT; i += 1) {
    if (userInputValueArray.includes(parseInt(userInputValue[i], 10))) {
      return true;
    }
    userInputValueArray.push(parseInt(userInputValue[i], 10));
  }
};

export const getUserInputNumbers = userInputNumbers => {
  const userInputValue = $('#user-input').value;
  if (
    checkUserInputNumbersCount(userInputValue) ||
    checkUserInputNumbersContainNotNumber(userInputValue) ||
    checkUserInputNumbersContainDuplicateNumbers(userInputValue)
  ) {
    window.alert('잘못된 값을 입력하셨습니다.');
  } else {
    userInputNumbers = [];
    for (let i = 0; i < NUM_COUNT; i += 1) {
      userInputNumbers.push(parseInt(userInputValue[i], 10));
    }
    return userInputNumbers;
  }
};
