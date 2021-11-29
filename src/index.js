import { createComputerInputNumbers } from './Numbers.js';
import onInputSubmit from './Submit.js';
import { getNothingHint, getBallHint, getStrikeHint } from './Result.js';

window.computerInputNumbers = createComputerInputNumbers();
document.getElementById('submit').addEventListener('click', onInputSubmit);

export default function BaseballGame() {
  window.play = (computerInputNumbers, userInputNumbers) => {
    const nothing = getNothingHint(computerInputNumbers, userInputNumbers);
    if (nothing) return nothing;

    let result = getBallHint(computerInputNumbers, userInputNumbers);
    result = getStrikeHint(computerInputNumbers, userInputNumbers, result);

    return result;
  };
}

BaseballGame();
