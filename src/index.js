import getComputerInputNumbers from "./utils/getComputerInputNumbers.js";
import getGameResult from "./utils/getGameResult.js";
import { validateUserInputNumbers } from "./utils/validation.js";
import ResultContainer from "./components/ResultContainer.js";

export default function BaseballGame() {
  const initialState = {
    computerInputNumbers: getComputerInputNumbers(),
  };

  const userInput = document.querySelector("#user-input");
  const submitBtn = document.querySelector("#submit");

  const resetUI = () => {
    ResultContainer({ resultText: "" });
    userInput.value = "";
  };

  const onClickRestartCallback = () => {
    initialState.computerInputNumbers = getComputerInputNumbers();
    userInput.value = "";
  };

  this.play = function (computerInputNumbers, userInputNumbers) {
    const { resultText, isGameClear } = getGameResult(
      computerInputNumbers,
      userInputNumbers
    );

    ResultContainer({ isGameClear, resultText, onClickRestartCallback });

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
