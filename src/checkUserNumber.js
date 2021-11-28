import { NUMBER_LENGTH } from './consts.js';

export default function checkUserInputValid(num) {
  if (isNumberHasZero(num)) {
    return false;
  }
  if (isNumTypeIsNumber(num)) {
    return false;
  }
  if (isNumberlenEqualsNumLength(num)) {
    return false;
  }
  if (isNumberDuplicated(num)) {
    return false;
  }
  return true;
}

function isNumberHasZero(num) {
  for (let i = 0; i < NUMBER_LENGTH; i++) {
    if (num[i] == 0) {
      alert('Please Enter Number Without Zero');
      return true;
    }
  }
  return false;
}

function isNumTypeIsNumber(num) {
  if (isNaN(num)) {
    alert('Please Enter Number');
    return true;
  }
  return false;
}

function isNumberlenEqualsNumLength(num) {
  if (num.length == NUMBER_LENGTH) {
    return false;
  }
  alert('Please Enter Three digit Number');
  return true;
}

function isNumberDuplicated(num) {
  const DigitsInNumberSet = new Set(num);
  if (DigitsInNumberSet.size == NUMBER_LENGTH) {
    return false;
  }
  alert('Please Enter Numbers without Duplication');
  return true;
}
