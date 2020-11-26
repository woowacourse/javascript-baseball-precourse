import BaseballGame from "./index.js";

const baseballWrapper = document.body.querySelector("#app");
const submitButton = baseballWrapper.querySelector("#submit");
const userInput = baseballWrapper.querySelector("#user-input");
const game = new BaseballGame();

const submitUserInput = () => {
  if (isInputRight()) {
    const resultText = game.play(game.answer, userInput.value);

    return showResultOnScreen(resultText);
  }
};

const isInputRight = () => {
  const { value } = userInput;

  if (value.match(/[^1-9]/g)) return alert("숫자가 아닙니다.");
  if (value.length !== new Set(value).size) {
    return alert("숫자가 중복됩니다.");
  }
  if (value.length !== 3) return alert("3자리의 숫자를 입력해주세요.");

  return true;
};

const showResultOnScreen = (resultText) => {
  const resultDiv = baseballWrapper.querySelector("#result");
  resultDiv.innerText = resultText;

  if (resultDiv.innerText === "3스트라이크") {
    return game.gameFinish();
  }
};

submitButton.addEventListener("click", submitUserInput);
