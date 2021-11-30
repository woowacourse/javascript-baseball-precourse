import { showError } from './error.js';
import { $ } from './util.js';

const isNumber = (value) => {
  return !isNaN(value);
};

const isLengthThree = (value) => {
  return value.toString().length === 3;
};

const isInOneToNine = (value) => {
  return [...value].every((num) => {
    return 1 <= num && num <= 9;
  });
};

const isNotDuplicateExist = (value) => {
  const numsExist = new Set();
  const valueArray = Array.from(String(value));
  for (const [idx, char] of valueArray.entries()) {
    const result = idx && numsExist.has(char);
    if (result) return false;
    numsExist.add(char);
  }
  return true;
};

const validateUserInput = (value) => {
  const result =
    isLengthThree(value) &&
    isNumber(value) &&
    isInOneToNine(value) &&
    isNotDuplicateExist(value);
  if (!result) {
    showError();
    resetInput();
  }
  return result;
};

const resetInput = () => {
  const $input = $('#user-input');
  $input.value = '';
};

export { isNotDuplicateExist, validateUserInput, resetInput };
