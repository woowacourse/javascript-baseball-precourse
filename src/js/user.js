import { NUM_COUNT } from './constant/constant.js';
import { $ } from './util/dom.js';

export const checkUserInputNumbersCount = userInputValue => {
  if (userInputValue.length !== NUM_COUNT) {
    return true;
  }
};

export const checkUserInputNumbersContainNotNumber = userInputValue => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < NUM_COUNT; i++) {
    if (!num.includes(parseInt(userInputValue[i]))) {
      return true;
    }
  }
};

export const checkUserInputNumbersContainDuplicateNumbers = userInputValue => {
  let userInputValueArray = [];
  for (let i = 0; i < NUM_COUNT; i++) {
    if (userInputValueArray.includes(parseInt(userInputValue[i]))) {
      return true;
    }
    userInputValueArray.push(parseInt(userInputValue[i]));
  }
};

export const getUserInputNumbers = userInputNumbers => {
  const userInputValue = $('#user-input').value;
  if (
    checkUserInputNumbersCount(userInputValue) ||
    checkUserInputNumbersContainNotNumber(userInputValue) ||
    checkUserInputNumbersContainDuplicateNumbers(userInputValue)
  ) {
    alert('잘못된 값을 입력하셨습니다.');
  } else {
    userInputNumbers = [];
    for (let i = 0; i < NUM_COUNT; i++) {
      userInputNumbers.push(parseInt(userInputValue[i]));
    }
    return userInputNumbers;
  }
};
