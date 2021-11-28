import isValidInput, {
  THREE_DIGIT_ERR,
  ONE_TO_NINE_ERR,
  DUPLICATE_ERR,
} from "./isValidInput.js";

const THREE_DIGIT_ERR_MSG = "입력 오류! 세 자리의 숫자만 입력해주세요.";
const ONE_TO_NINE_ERR_MSG = "입력 오류! 1~9 까지의 숫자만 입력해주세요.";
const DUPLICATE_ERR_MSG = "입력 오류! 중복없는 세 자리 숫자만 입력해주세요.";

function alertErrorMessage(error) {
  if (error === THREE_DIGIT_ERR) {
    alert(THREE_DIGIT_ERR_MSG);
    return false;
  }
  if (error === ONE_TO_NINE_ERR) {
    alert(ONE_TO_NINE_ERR_MSG);
    return false;
  }
  if (error === DUPLICATE_ERR) {
    alert(DUPLICATE_ERR_MSG);
    return false;
  }
  return true;
}

export default function getUserInput() {
  let userInput = null;
  const userInputArray = document.querySelector("#user-input").value.split("");
  if (alertErrorMessage(isValidInput(userInputArray))) {
    userInput = userInputArray;
  }
  return userInput?.join("");
}
