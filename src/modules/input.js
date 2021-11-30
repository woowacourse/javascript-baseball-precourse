import { showError } from './error.js';
import { $ } from './util.js';
import NUMBER from '../constants/number.js';

const isNumber = (value) => {
  return !isNaN(value);
};

const isLengthThree = (value) => {
  return value.length === NUMBER.LENGTH;
};

const isInOneToNine = (value) => {
  return [...value].every((num) => {
    return NUMBER.MIN <= num && num <= NUMBER.MAX;
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
