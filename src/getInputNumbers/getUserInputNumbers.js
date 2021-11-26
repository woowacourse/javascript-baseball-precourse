function isNotDuplicate(userInputs) {
  // userInput이 중복되는 숫자가 있는지 체크
  const userInputNumbers = [];
  for (let i = 0; i < userInputs.length; i += 1) {
    const userInput = userInputs[i];
    if (!userInputNumbers.includes(userInput)) {
      userInputNumbers.push(userInput);
    }
  }
  return userInputNumbers;
}

function isRightNumber(userInputs) {
  // userInput이 1~9 사이 숫자인지 체크
  for (let i = 0; i < userInputs.length; i += 1) {
    const userInput = userInputs[i];
    const userInputAsciiCodeNumber = userInput.charCodeAt();
    if (userInputAsciiCodeNumber <= 48 || userInputAsciiCodeNumber > 57) {
      return false;
    }
  }
  return true;
}

function isRightLength(userInputs) {
  // userInput.length 체크
  if (userInputs.length !== 3) {
    return false;
  }
  return true;
}

function checkTheRightUserInput(userInputs) {
  if (!isRightLength(userInputs) || !isRightNumber(userInputs)) {
    return false;
  }

  const userInputNumbers = isNotDuplicate(userInputs);
  if (userInputNumbers.length !== 3) {
    return false;
  }
  return userInputNumbers;
}

export default function getUserInputNumbers($userInput) {
  const userInputs = $userInput.value;
  const userInputNumbers = checkTheRightUserInput(userInputs);

  if (!userInputNumbers) {
    return '공백 없이 중복되지 않는 숫자 3개를 입력해주세요!';
  }

  return userInputNumbers.map((string) => Number(string));
}
