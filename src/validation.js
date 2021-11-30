import {TEXT} from './constants.js';

// check is null
function isNotNull(input) {
  return input.length === 0;
}

// check length is three
function isThreeNum(input) {
  return input.length !== 3;
}

// check none overlap
function isAnother(input) {
  const set = new Set(input);

  return set.size !== input.length;
}

// check is number
function isNumber(input) {
  let result = false;

  input.forEach(value => {
    if (Number.isNaN(Number(value))) {
      result = true;
    }
  });

  return result;
}

// check exist zero(0)
function isZero(input) {
  return !!input.includes('0');
}

// Check all condition
export function checkWarning(input) {
  if (isNotNull(input)) {
    alert(TEXT.ALERT_IS_NULL);

    return false;
  }
  if (isZero(input)) {
    alert(TEXT.ALERT_NOT_ZERO);

    return false;
  }
  if (isNumber(input)) {
    alert(TEXT.ALERT_IS_NUM);

    return false;
  }
  if (isThreeNum(input)) {
    alert(TEXT.ALERT_IS_THREE);

    return false;
  }
  if (isAnother(input)) {
    alert(TEXT.ALERT_IS_ANOTHER);

    return false;
  }

  return true;
}
