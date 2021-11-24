import { ERROR, NUM } from "./constants.js";

export const isValidUserInput = (input) => {
  let isValid = true;

  if (
    input.length !== NUM.MAX_LENGTH ||
    input.includes(0) ||
    input.includes(NaN)
  ) {
    alert(ERROR.NUMBER_IS_NOT_CORRECT);
    isValid = false;
  }
  if (new Set([...input]).size !== NUM.MAX_LENGTH) {
    alert(ERROR.NUMBER_IS_DUPLICATED);
    isValid = false;
  }

  return isValid;
};
