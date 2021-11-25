import { BASEBALL, ERROR_MESSAGES } from '../constants/index.js';

export const $ = selector => document.querySelector(selector);

export const isCorrectLength = (value, digit) => value.trim().length !== digit;

export const isNumber = value => !Number.isNaN(+value);

export const isIncludes = (value, target) => value.includes(target);

export const isDuplicateLetter = value => {
  const target = value.split('');
  const converted = new Set(target);
  return target.length !== converted.size;
};

export const setErrorMessage = type =>
  /* eslint-disable no-alert */
  alert(ERROR_MESSAGES[type]);

export const isInValid = value => {
  if (isCorrectLength(value, BASEBALL.DIGIT)) return !setErrorMessage('not-enough-value');
  if (!isNumber(value)) return !setErrorMessage('invalid-value');
  if (isIncludes(value, BASEBALL.ZERO)) return !setErrorMessage('included-zero');
  if (isDuplicateLetter(value)) return !setErrorMessage('is-duplicated-value');
  return false;
};

export const isNumberObject = state => {
  const newState = Object.assign(state);
  Object.keys(newState).forEach(key => {
    if (!isNumber(newState[key])) newState[key] = BASEBALL[key.toUpperCase()];
  });
  return newState;
};
