import { $restart } from './constants.js';
import { BaseballGame } from './index.js';

//Show Restart Button
export function setButton() {
  $restart.addEventListener("click", (e) => {
    e.preventDefault();

    clearButton();
    new BaseballGame();
  })
  $restart.style.display = "display";
}

//Hide Restart Button
export function clearButton() {
  $restart.style.display = "none";
}