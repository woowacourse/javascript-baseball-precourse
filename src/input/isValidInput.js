import {
  THREE_DIGIT_ERR,
  ONE_TO_NINE_ERR,
  DUPLICATE_ERR,
  NO_ERROR,
} from '../constant/constant.js';

function isThreeDigitInputError(input) {
  return input.length !== 3;
}

function isOneToNineNumberError(input) {
  return input.some((element) => {
    return Number.isNaN(element) || element < 1 || element > 9;
  });
}

function isNoDuplicatedNumberError(input) {
  const nonDuplicatedSet = new Set();
  for (let idx = 0; idx < input.length; idx += 1) {
    nonDuplicatedSet.add(input[idx]);
  }
  return nonDuplicatedSet.size !== 3;
}

export default function isValidInput(input) {
  if (isThreeDigitInputError(input)) {
    return THREE_DIGIT_ERR;
  }
  if (isOneToNineNumberError(input.map((element) => +element))) {
    return ONE_TO_NINE_ERR;
  }
  if (isNoDuplicatedNumberError(input)) {
    return DUPLICATE_ERR;
  }
  return NO_ERROR;
}
