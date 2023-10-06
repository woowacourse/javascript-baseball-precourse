import { INVALID_MESSAGE, MAX_INPUT_LENGTH } from '../constants/constant.js';

export const isEmptyValue = (userInput) => {
  return userInput === '';
};

export const isNotNumber = (userInput) => {
  return userInput.match(/\D/);
};

export const isOverMaxLength = (userInput) => {
  return userInput.length !== MAX_INPUT_LENGTH;
};

export const isWithZero = (userInput) => {
  return userInput.match(/0/);
};

export const isNotValidNumberRange = (userInput) => {
  return isWithZero(userInput) || isNotNumber(userInput);
};

export const isDuplicatedNumber = (userInput) => {
  const userInputNumberSet = new Set(userInput);
  return userInputNumberSet.size !== userInput.length;
};

export const validateUserInput = (userInput) => {
  if (isEmptyValue(userInput)) {
    return INVALID_MESSAGE.EMPTY_VALUE;
  } else if (isOverMaxLength(userInput)) {
    return INVALID_MESSAGE.NOT_THREE_DEGIT;
  } else if (isNotValidNumberRange(userInput)) {
    return INVALID_MESSAGE.NOT_VALID;
  } else if (isDuplicatedNumber(userInput)) {
    return INVALID_MESSAGE.DUPLICATED_VALUE;
  }
};
