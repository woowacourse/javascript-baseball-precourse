import { $ } from "../util/index.js";

const getUserNumber = () => {
  const $userInput = $("#user-input").value;
  const userInputNumbers = $userInput
    .split("")
    .map((number) => parseInt(number, 10));

  checkValidation(userInputNumbers);

  return userInputNumbers;
};

const checkValidation = (userInputNumbers) => {
  const isScope = userInputNumbers.every((number) =>
    number >= 1 && number <= 9 ? true : false
  );
  if (!isScope) {
    alert("1~9 사이의 숫자를 입력해주세요");
  }

  const isLength = userInputNumbers.length === 3 ? true : false;
  if (!isLength) {
    alert("3자리의 수를 입력해주세요");
  }
};

export default getUserNumber;
