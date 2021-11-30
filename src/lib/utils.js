import { MAX_RANGE, MIN_RANGE } from "./constants.js";

function checkNumeric(str) {
  return !isNaN(+str);
}
function checkLengthThree(str) {
  return str.length === 3;
}
function checkNotDuplicate(str) {
  return str.length === new Set(str.split("")).size;
}
function checkExcludeZero(str) {
  return !str.includes("0");
}
export function checkValidation(str) {
  return (
    checkNumeric(str) &&
    checkLengthThree(str) &&
    checkNotDuplicate(str) &&
    checkExcludeZero(str)
  );
}

export function getComputerInput() {
  const num = new Set();
  while (true) {
    if (num.size === 3) {
      break;
    }
    num.add(MissionUtils.Random.pickNumberInRange(MIN_RANGE, MAX_RANGE));
  }
  return [...num];
}
