export const validateUserInputNumbers = (userInput) => {
  console.log("userInput :", userInput);
  const check = {
    isError: false,
    message: ``,
  };

  if (/[^0-9]/g.test(userInput)) {
    check.isError = true;
    check.message = `"${userInput}"은 올바른 값이 아닙니다. 숫자를 입력해 주세요`;
    return check;
  }

  if (/0/g.test(userInput)) {
    check.isError = true;
    check.message = `"${userInput}"은 올바른 값이 아닙니다. 1~9까지의 숫자를 입력해 주세요`;
    return check;
  }

  const uniqueUserInputs = new Set(userInput.split(""));
  if (userInput.length !== 3 || userInput.length !== uniqueUserInputs.size) {
    check.isError = true;
    check.message = `"${userInput}"은 올바른 값이 아닙니다. 1~9까지 서로 다른 임의의 숫자 3개를 입력해 주세요`;
    return check;
  }

  return check;
};
