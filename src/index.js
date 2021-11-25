import getComputerInputNumbers from "./utils/getComputerInputNumbers.js";
import getScore from "./utils/getScore.js";
import { validateUserInputNumbers } from "./utils/validation.js";
import RestartBlock from "./components/RestartBlock.js";

const initialState = {
  computerInputNumbers: getComputerInputNumbers(),
  userInputNumbers: [],
  balls: 0,
  strikes: 0,
};

export default function BaseballGame() {
  const userInput = document.querySelector("#user-input");
  const submitBtn = document.querySelector("#submit");
  const resultBlock = document.querySelector("#result");

  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log("play----------", computerInputNumbers, userInputNumbers);

    const { resultText, isSuccess } = getScore(
      computerInputNumbers,
      userInputNumbers
    );
    console.log(resultText, isSuccess);
    if (isSuccess) {
      RestartBlock(resultBlock);
      return resultText;
    }

    resultBlock.innerHTML = resultText;
    return resultText;
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    const { value } = userInput;
    const { isError, message } = validateUserInputNumbers(value);
    if (isError) {
      window.alert(message);
      userInput.value = "";
      resultBlock.innerHTML = "";
      return;
    }

    this.play(initialState.computerInputNumbers, Number(value));
  };

  submitBtn.addEventListener("click", onHandleSubmit);
}

new BaseballGame();
