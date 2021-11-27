import { $result, $submit } from "../constants/constants.js";
import validUserInput from "../input/validUserInput.js";

export default function playGame(computerAnswer, play) {
  $submit.addEventListener("click", (e) => {
    e.preventDefault();
    const userAnswer = validUserInput();
    if (userAnswer) {
      const gameResult = play(computerAnswer, userAnswer);
      $result.innerHTML = gameResult;
    }
  });
}
