import getComputerInputNumbers from "./utils/getComputerInputNumbers.js";
import { validateUserInputNumbers } from "./utils/validation.js";

const initialState = {
  computerInputNumbers: getComputerInputNumbers(),
  userInputNumbers: [],
  balls: 0,
  strikes: 0,
};

export default function BaseballGame() {
  const userInput = document.querySelector("#user-input");
  const submitBtn = document.querySelector("#submit");

  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log("play----------", computerInputNumbers, userInputNumbers);
    return "결과 값 String";
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    const { value } = userInput;
    const { isError, message } = validateUserInputNumbers(value);
    if (isError) {
      window.alert(message);
      userInput.value = "";
      return;
    }

    this.play(initialState.computerInputNumbers, value.split(""));
    console.log("success", value);
  };

  submitBtn.addEventListener("click", onHandleSubmit);
}

new BaseballGame();
