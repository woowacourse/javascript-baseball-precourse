import { LENGTH } from "./constants.js";

function checkNumeric(str) {
  return !isNaN(+str);
}
function checkLengthThree(str) {
  return str.length === LENGTH;
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
