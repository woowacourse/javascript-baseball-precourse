import { $restart, $restartArea } from './constants.js';
import BaseballGame from './index.js';

//Show Restart Button
export function setButton() {
  $restartArea.style.display = "display";
  $restart.addEventListener("click", (e) => {
    e.preventDefault();

    clearButton();
    new BaseballGame();
  });
}

//Hide Restart Button
export function clearButton() {
  $restartArea.style.display = "none";
}