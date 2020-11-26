function checkValidLength(userInputNumbers) {
  if (userInputNumbers.length === 3) {
    return true;
  }
  return false;
}

function checkValidScope(number) {
  if (1 <= number && number <= 9) {
    return true;
  }
  return false;
}

function checkDuplicate(userInputNumbers) {
  if (userInputNumbers.length === [...new Set(userInputNumbers)].length) {
    return true;
  }
  return false;
  //   console.log(userInputNumbers.length);
}

export default function checkValidInput(userInputNumbers) {
  if (!checkValidLength(userInputNumbers)) {
    return false;
  }
  if (!checkDuplicate(userInputNumbers)) {
    return false;
  }
  if (!userInputNumbers.every(checkValidScope)) {
    return false;
  }

  return userInputNumbers;
}
