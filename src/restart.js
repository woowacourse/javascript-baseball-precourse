import {$restart, $restartArea} from './constants.js';
import BaseballGame from './index.js';

// Show Restart Button
export function setButton() {
  showButton();

  $restart.addEventListener('click', e => {
    e.preventDefault();

    clearButton();
    // eslint-disable-next-line no-new
    new BaseballGame();
  });
}

// Hide Restart Button
export function clearButton() {
  $restartArea.style.display = 'none';
}

// Hide Restart Button
export function showButton() {
  $restartArea.style.display = 'block';
}
