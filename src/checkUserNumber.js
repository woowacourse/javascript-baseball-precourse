import { RANGE_MAX, RANGE_MIN, NUMBER_LENGTH } from './consts.js';

/*check usernumber condition*/
export function checkNumberConsistZero(num) {
  for (let i = 0; i < NUMBER_LENGTH; i++) {
    if (num[i] == 0) {
      alert('Please Enter Number Without Zero');
      return true;
    }
  }
  return false;
}

export function checkNumberNotNumber(num) {
  if (isNaN(num)) {
    return true;
  }
  return false;
}

export function checkNumberlenEqualsNumLength(num) {
  if (num.length == NUMBER_LENGTH) {
    return false;
  }
  alert('Please Enter Three digit Number');
  return true;
}

export function checkDigitsInNumberDuplicated(num) {
  const DigitsInNumberSet = new Set(num);
  if (DigitsInNumberSet.size == NUMBER_LENGTH) {
    return false;
  }
  alert('Please Enter Numbers without Duplication');
  return true;
}

export function checkUserInputValid(num) {
  if (checkNumberConsistZero(num)) {
    return false;
  }
  if (checkNumberNotNumber(num)) {
    return false;
  }
  if (checkNumberlenEqualsNumLength(num)) {
    return false;
  }
  if (checkDigitsInNumberDuplicated(num)) {
    return false;
  }
  return true;
}
