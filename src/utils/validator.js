import { setErrorMessage, showError } from "./error.js";
import { resetInput } from "./resetInput.js";

const isNumber = (value) => {
  const res = !isNaN(value);
  !res && setErrorMessage("IS_NOT_NUMBER_ERROR");
  return res;
};

const isLengthThree = (value) => {
  const res = value.toString().length === 3;
  !res && setErrorMessage("IS_NOT_LENGTH_THREE_ERROR");
  return res;
};

export const isNotDuplicateExist = (value) => {
  const numsExist = new Set();
  const valueArray = Array.from(String(value));
  for (const [idx, char] of valueArray.entries()) {
    const res = idx && numsExist.has(char);
    if (res) {
      setErrorMessage("IS_DUPLICATE_EXIST_ERROR");
      return false;
    }
    numsExist.add(char);
  }
  return true;
};

export const validateUserInput = (value) => {
  const res =
    isLengthThree(value) && isNumber(value) && isNotDuplicateExist(value);
  if (!res) {
    showError();
    resetInput();
  }
  return res;
};
