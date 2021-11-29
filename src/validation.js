import { TEXT } from './constants.js';

//Check all condition
export function checkInput(input) {
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

//check is null
function isNotNull(input) {
  return input.length === 0 ? true : false;
}

//check length is three
function isThreeNum(input) {
  return input.length !== 3 ? true : false;
}

//check none overlap
function isAnother(input) {
  const set = new Set(input);

  return set.size !== input.length ? true : false;
}

//check is number
function isNumber(input) {
  let result = false;

  input.map(value => {
    if(Number.isNaN(value * 1)) {
      result = true;
    }
  });

  return result;
}

//check exist zero(0)
function isZero(input) {
  return input.includes("0") ? true : false; 
}