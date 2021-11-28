export function checkValidation(userInputNumbers) {
  if (userInputNumbers.length !== 3) {
    return false;
  }
  if (new Set(userInputNumbers).size !== 3) {
    return false;
  }
  if (Number.isNaN(Number(userInputNumbers))) {
    return false;
  }
  if (userInputNumbers.includes(0)) {
    return false;
  }
  return true;
}