import { USER_INPUT_MAX_LENGTH_THREE } from "./constants.js";

export const validateUserInputNumbers = (userInput) => {
  const validateForm = {
    isError: false,
    errorMessage: ``,
  };

  if (/[^0-9]/g.test(userInput)) {
    validateForm.isError = true;
    validateForm.errorMessage = `"${userInput}"은 올바른 값이 아닙니다. 숫자를 입력해 주세요`;
    return validateForm;
  }

  if (/0/g.test(userInput)) {
    validateForm.isError = true;
    validateForm.errorMessage = `"${userInput}"은 올바른 값이 아닙니다. 1~9까지의 숫자를 입력해 주세요`;
    return validateForm;
  }

  const uniqueUserInputs = new Set(userInput.split(""));
  if (
    userInput.length !== USER_INPUT_MAX_LENGTH_THREE ||
    userInput.length !== uniqueUserInputs.size
  ) {
    validateForm.isError = true;
    validateForm.errorMessage = `"${userInput}"은 올바른 값이 아닙니다. 1~9까지 서로 다른 임의의 숫자 3개를 입력해 주세요`;
    return validateForm;
  }

  return validateForm;
};
