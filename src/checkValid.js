import { ERROR_MESSAGE } from "./constant.js";

export function checkNumber(uNumber) {
  let check = true;
  const stringuNumber = String(uNumber)
  const checkLegnthResult = checkLegnth(stringuNumber, check)
  const checkOverlapResult = checkOverlap(stringuNumber, check)
  const checkContainZero = checkZero(stringuNumber, check)
  if (checkLegnthResult && checkOverlapResult && checkContainZero) {
    return stringuNumber;
  }
}

function checkLegnth(uNumber, check) {
  if (uNumber.length !== 3) {
    alert (ERROR_MESSAGE.inputThreeNumber)
    check = false;
  }
  
  return check;
}

function checkOverlap(uNumber, check) {
  const _uNumberSet = new Set(uNumber.split(''))
  if (uNumber.length !== _uNumberSet.size) {
    alert (ERROR_MESSAGE.inputSameNumber)
    check = false;
  }

  return check;
}

function checkZero(uNumber, check) {
  for (let num of uNumber) {
    if (num === "0") {
      alert (ERROR_MESSAGE.imputZeroNumber)
      check = false;
      break;
    }
  }

  return check;
}