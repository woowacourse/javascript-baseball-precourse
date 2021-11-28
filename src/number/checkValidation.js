const checkScopeValidation = (userInputNumbers) => {
  const result = userInputNumbers.every((number) =>
    number >= 1 && number <= 9 ? true : false
  );
  return result;
};

const checkLengthValidation = (userInputNumbers) => {
  return userInputNumbers.length === 3 ? true : false;
};

const checkDuplicateValidation = (userInputNumbers) => {
  return userInputNumbers.length === new Set(userInputNumbers).size
    ? true
    : false;
};

const checkValidation = (userInputNumbers) => {
  if (!checkScopeValidation(userInputNumbers)) {
    alert("1~9 사이의 숫자를 입력해주세요");
    return false;
  }

  if (!checkLengthValidation(userInputNumbers)) {
    alert("3자리의 수를 입력해주세요");
    return false;
  }

  if (!checkDuplicateValidation(userInputNumbers)) {
    alert("중복이 없는 서로 다른 숫자를 입력해주세요");
    return false;
  }
  return true;
};

export default checkValidation;
