function isNumber(userInputNumbers) {
  const regex = /^[0-9]*$/;
  const response = regex.test(userInputNumbers);

  return response;
}

function isNot3Digit(userInputNumbers) {
  if (userInputNumbers.length !== 3) {
    return true;
  }
}

function isInZero(userInputNumbers) {
  if (userInputNumbers.includes('0')) {
    return true;
  }
}

function isInDuplicateDigit(userInputNumbers) {
  const deduplicateCount = Array.from(new Set(userInputNumbers)).length;
  if (deduplicateCount !== 3) {
    return true;
  }
}

export { isNumber, isNot3Digit, isInZero, isInDuplicateDigit };
