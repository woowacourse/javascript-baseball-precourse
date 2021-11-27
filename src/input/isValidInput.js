export const THREE_DIGIT_ERR = 1;
export const ONE_TO_NINE_ERR = 2;
export const DUPLICATE_ERR = 3;

function isThreeDigitInput(input) {
  return input.length === 3;
}

function isOneToNineNumber(input) {
  return !input.some((element) => {
    return Number.isNaN(element) || element < 1 || element > 9;
  });
}

function isNoDuplicatedNumber(input) {
  const nonDuplicatedSet = new Set();

  for (let idx = 0; idx < input.length; idx += 1) {
    nonDuplicatedSet.add(input[idx]);
  }
  return nonDuplicatedSet.size === 3;
}

export default function isValidInput(input) {
  if (!isThreeDigitInput(input)) {
    return THREE_DIGIT_ERR;
  }
  if (!isOneToNineNumber(input)) {
    return ONE_TO_NINE_ERR;
  }
  if (!isNoDuplicatedNumber(input)) {
    return DUPLICATE_ERR;
  }
  return false;
}
