import getComputerInputNumbers from "./utils/getComputerInputNumbers.js";
import getGameResult from "./utils/getGameResult.js";
import { validateUserInputNumbers } from "./utils/validation.js";
import RestartContainer from "./components/RestartContainer.js";

export default function BaseballGame() {
  const initialState = {
    computerInputNumbers: getComputerInputNumbers(),
  };

  const userInput = document.querySelector("#user-input");
  const submitBtn = document.querySelector("#submit");
  const resultBlock = document.querySelector("#result");

  const resetUI = () => {
    resultBlock.innerHTML = "";
    userInput.value = "";
  };

  const onClickRestartCallback = () => {
    initialState.computerInputNumbers = getComputerInputNumbers();
    resetUI();
  };

  this.play = function (computerInputNumbers, userInputNumbers) {
    const { resultText, isGameClear } = getGameResult(
      computerInputNumbers,
      userInputNumbers
    );

    if (isGameClear) {
      RestartContainer(resultBlock, onClickRestartCallback);
      return resultText;
    }

    resultBlock.innerHTML = resultText;
    return resultText;
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    const { value } = userInput;
    const { isError, errorMessage } = validateUserInputNumbers(value);

    if (isError) {
      window.alert(errorMessage);
      resetUI();
      return;
    }

    this.play(initialState.computerInputNumbers, Number(value));
  };

  submitBtn.addEventListener("click", onClickSubmit);
}

new BaseballGame();
