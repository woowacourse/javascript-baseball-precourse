import { ERROR, NUM } from "./constants.js";

const isInvalidNumber = (input) => {
  return input.includes(NaN) || input.includes(0);
};

const isExceedLength = (input) => {
  return input.length !== NUM.MAX_LENGTH;
};

const isDuplicatedNumber = (input) => {
  return new Set([...input]).size !== NUM.MAX_LENGTH;
};

export const isValidUserInput = (input) => {
  if (isInvalidNumber(input) || isExceedLength(input)) {
    alert(ERROR.NUMBER_IS_NOT_CORRECT);
    return false;
  }

  if (isDuplicatedNumber(input)) {
    alert(ERROR.NUMBER_IS_DUPLICATED);
    return false;
  }

  return true;
};
