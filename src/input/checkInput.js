function alertInvalidInput() {
  alert('잘못 된 입력입니다! 올바른 예)139');
  return false;
}

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
    return alertInvalidInput();
  }
  if (!checkDuplicate(userInputNumbers)) {
    return alertInvalidInput();
  }
  if (!userInputNumbers.every(checkValidScope)) {
    return alertInvalidInput();
  }

  return userInputNumbers;
}
