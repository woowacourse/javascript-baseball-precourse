function isNumeric(str) {
  return !isNaN(+str);
}
function isLengthThree(str) {
  return str.length === 3;
}
function isNotDuplicate(str) {
  return str.length === new Set(str.split("")).size;
}
function hasZero(str) {
  return str.includes("0");
}
export function isValidate(str) {
  return (
    isNumeric(str) && isLengthThree(str) && isNotDuplicate(str) && !hasZero(str)
  );
}
export function getComputerInput() {
  while (true) {
    const random = MissionUtils.Random.pickNumberInRange(100, 999).toString();
    if (isNotDuplicate(random) && !hasZero(random)) {
      return random;
    }
  }
}
