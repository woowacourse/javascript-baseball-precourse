import { getUserInput, clearUserInput } from "./getUserInput.js";

export function getValidatedInput(userInputValue) {
  let isValid = false;
  userInputValue = getUserInput()
    .split("")
    .map((num) => Number(num));

  if (userInputValue.length !== 3) {
    alert("세자리 수를 입력해 주세요.");
  } else if (new Set(userInputValue).size !== 3) {
    alert("중복되지 않는 세자리 수를 입력해 주세요.");
  } else if (userInputValue.includes(0)) {
    alert("1 ~ 9 사이의 수만 입력이 가능합니다.");
  } else if (userInputValue.some(isNaN)) {
    alert("숫자만 입력이 가능합니다.");
  } else {
    isValid = true;

    return isValid;
  }

  clearUserInput();
}
