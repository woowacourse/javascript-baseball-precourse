import isValidInput, {
  THREE_DIGIT_ERR,
  ONE_TO_NINE_ERR,
  DUPLICATE_ERR,
} from "./isValidInput.js";

const THREE_DIGIT_ERR_MSG = "입력 오류! 세 자리의 숫자만 입력해주세요.";
const ONE_TO_NINE_ERR_MSG = "입력 오류! 숫자만 입력해주세요.";
const DUPLICATE_ERR_MSG = "입력 오류! 중복없는 세 자리 숫자만 입력해주세요.";

function alertErrorMessage(error) {
  switch (error) {
    case THREE_DIGIT_ERR: {
      alert(THREE_DIGIT_ERR_MSG);
      return false;
    }
    case ONE_TO_NINE_ERR: {
      alert(ONE_TO_NINE_ERR_MSG);
      return false;
    }
    case DUPLICATE_ERR: {
      alert(DUPLICATE_ERR_MSG);
      return false;
    }
    default:
      return true;
  }
}

export default function getUserInput() {
  let userInput = null;
  const userInputArray = document
    .querySelector("#user-input")
    .value.split("")
    .map((elem) => +elem);
  if (alertErrorMessage(isValidInput(userInputArray))) {
    userInput = userInputArray;
  }
  return userInput?.join("");
}
