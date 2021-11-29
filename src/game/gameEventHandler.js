import getComputerInput from "../input/getComputerInput.js";
import getUserInput from "../input/getUserInput.js";
import showResult from "../view/showResult.js";

function onUserSubmit(event, play, computerInput) {
  event.preventDefault();
  const userInput = getUserInput();

  if (userInput) {
    showResult(play(computerInput, userInput));
  }
}

export default function gameEventHandler(play) {
  const $userSubmitButton = document.getElementById("submit");
  const $userResultDiv = document.getElementById("result");
  let computerInput = getComputerInput();

  $userSubmitButton.addEventListener("click", (event) =>
    onUserSubmit(event, play, computerInput)
  );
  $userResultDiv.addEventListener("click", (event) => {
    if (event.target.id === "game-restart-button") {
      computerInput = getComputerInput();
      // deleteAskRestartView();
    }
  });
}
