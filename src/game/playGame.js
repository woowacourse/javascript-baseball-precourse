import { $submit } from "../constants/constants.js";
import validUserInput from "../input/validUserInput.js";

export default function playGame(computerAnswer, play) {
  $submit.addEventListener("click", (e) => {
    e.preventDefault();
    const userAnswer = validUserInput();
  });
}
