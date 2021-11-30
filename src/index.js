import { createComputerInputNumbers } from './Numbers.js';
import onInputSubmit from './Submit.js';
import {
  getNothingHint,
  getBallHint,
  getStrikeHint,
  getGameOver,
} from './Result.js';
import { countStrike } from './Count.js';

function initialize() {
  window.computerInputNumbers = createComputerInputNumbers();
  document.getElementById('submit').addEventListener('click', onInputSubmit);
}

function getResultString(computerInputNumbers, userInputNumbers) {
  const nothing = getNothingHint(computerInputNumbers, userInputNumbers);
  if (nothing) return nothing;

  let result = getBallHint(computerInputNumbers, userInputNumbers);
  const strike = countStrike(computerInputNumbers, userInputNumbers);
  if (strike === 3) result = getGameOver();
  else if (strike) result = getStrikeHint(strike, result);

  return result;
}

export default function BaseballGame() {
  initialize();
  window.play = function (computerInputNumbers, userInputNumbers) {
    return getResultString(computerInputNumbers, userInputNumbers);
  };
}

BaseballGame();
