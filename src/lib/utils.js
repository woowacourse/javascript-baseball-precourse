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
export function checkValidate(str) {
  return (
    checkNumeric(str) &&
    checkLengthThree(str) &&
    checkNotDuplicate(str) &&
    checkExcludeZero(str)
  );
}
export function getComputerInput() {
  while (true) {
    const random = MissionUtils.Random.pickNumberInRange(100, 999).toString();
    if (checkNotDuplicate(random) && checkExcludeZero(random)) {
      return random;
    }
  }
}
