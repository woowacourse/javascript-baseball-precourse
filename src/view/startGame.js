import getComputerInputNumbers from "../input/getComputerInputNumbers.js";
import getUserInputNumbers from "../input/getUserInputNumbers.js";
import showResult from "./showResult.js";

const userInput = document.getElementById("user-input");
const submitButton = document.getElementById("submit");
const resultDiv = document.getElementById("result");

function initForm() {
  userInput.value = "";
  resultDiv.textContent = "";
}

export default function startGame(computerInputNumbers, callbackPlay) {
  submitButton.addEventListener("click", () => {
    console.log("버튼 실행", computerInputNumbers);
    event.preventDefault();

    const userInputNumbers = getUserInputNumbers();
    if (userInputNumbers !== "") {
      showResult(callbackPlay(computerInputNumbers, userInputNumbers));
    }
  });

  result.addEventListener("click", ({ target }) => {
    if (target.id === "game-restart-button") {
      initForm();
      computerInputNumbers = getComputerInputNumbers();
    }
  });
}
