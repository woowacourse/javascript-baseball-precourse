import { VALIDATE_MESSAGES, NUMBERS_LENGTH, NUMBERS_RANGE } from './constants.js';

function validateLength(input) {
  if (input.length !== NUMBERS_LENGTH) {
    return false;
  }

  return true;
}

function validateRange(input) {
  for (let index = 0; index < NUMBERS_LENGTH; index++) {
    if (input[index] < NUMBERS_RANGE.min.toString() || input[index] > NUMBERS_RANGE.toString()) {
      return false;
    }
  }

  return true;
}

function validateDuplication(input) {
  const usedNumber = {};

  for (let index = 0; index < NUMBERS_LENGTH; index++) {
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
