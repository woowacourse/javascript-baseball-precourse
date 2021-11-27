import { $result, $submit } from "../constants/constants.js";
import BaseballGame from "../index.js";
import validUserInput from "../input/validUserInput.js";

export default function playGame(computerAnswer, play) {
  $submit.addEventListener("click", (e) => {
    e.preventDefault();
    const userAnswer = validUserInput();
    if (userAnswer) {
      const gameResult = play(computerAnswer, userAnswer);
      $result.innerHTML = gameResult;
      gameRestart();
    }
  });
}

const gameRestart = () => {
  const $restartButton = document.getElementById("game-restart-button");
  if ($restartButton) {
    $restartButton.addEventListener("click", () => {
      new BaseballGame();
    });
  }
};
