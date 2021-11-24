import { BASEBALL_DIGIT, ERROR_MESSAGES } from '../constants/index.js';

export const $ = selector => document.querySelector(selector);

export const isDuplicateLetter = value => {
  const target = value.split('');
  const converted = new Set(target);
  return target.length !== converted.size;
};

export const setErrorMessage = type =>
  /* eslint-disable no-alert */
  alert(ERROR_MESSAGES[type]);

export const isInValid = value => {
  if (value.trim().length !== BASEBALL_DIGIT)
    return !setErrorMessage('not-enough-value');
  if (Number.isNaN(+value)) return !setErrorMessage('invalid-value');
  if (isDuplicateLetter(value)) return !setErrorMessage('is-duplicated-value');
  return false;
};
