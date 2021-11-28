import { setComputerInput, setBallStrike } from './functions/util.js';
import { SUBMIT_BUTTON } from './constants/html-doms.js';
import { makeResultMessage } from './functions/game-result.js';
import { onSubmitClick } from './functions/add-submit-event.js';

export default function BaseballGame() {
  setComputerInput();
  this.play = function (computerInput, userInput) {
    setBallStrike(computerInput, userInput);

    return makeResultMessage();
  };

  SUBMIT_BUTTON.addEventListener('click', event => onSubmitClick(event, this.play));
}

new BaseballGame();
