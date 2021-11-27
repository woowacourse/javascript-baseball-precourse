import { VALIDATE_MESSAGES } from './constants.js';

function validateLength(input) {
  if (input.length !== 3) {
    return false;
  }

  return true;
}

function validateRange(input) {
  for (let index = 0; index < input.length; index++) {
    if (input[index] < '1' || input[index] > '9') {
      return false;
    }
  }

  return true;
}

function validateDuplication(input) {
  const usedNumber = {};

  for (let index = 0; index < input.length; index++) {
    if (usedNumber[input[index]]) {
      return false;
    }

    usedNumber[input[index]] = true;
  }

  return true;
}

export default function validateInput(input) {
  if (!validateLength(input)) {
    return VALIDATE_MESSAGES.invalidLength;
  }

  if (!validateRange(input)) {
    return VALIDATE_MESSAGES.invalidRange;
  }

  if (!validateDuplication(input)) {
    return VALIDATE_MESSAGES.invalidDuplication;
  }

  return VALIDATE_MESSAGES.valid;
}
