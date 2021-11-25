import { state } from './state/index.js';
import { USER_INPUT, SUBMIT_BUTTON } from './constants/html-doms.js';
import { makeRandomNumber, checkUserInputValid } from './functions/input.js';
import { setBallStrike, initBallStrikeCount } from './functions/ball-strike.js';
import { makeResultMessage, makeResultDom } from './functions/result.js';

export default function BaseballGame() {
  state.computerInput = makeRandomNumber();
  this.play = function (computerInput, userInput) {
    setBallStrike(computerInput, userInput);
    const resultMessage = makeResultMessage();

    return resultMessage;
  };
  SUBMIT_BUTTON.addEventListener('click', event => {
    event.preventDefault();
    state.userInput = parseInt(USER_INPUT.value);
    initBallStrikeCount();
    if (checkUserInputValid(USER_INPUT.value)) {
      const resultMessage = this.play(state.computerInput, state.userInput);
      makeResultDom(resultMessage);
    }
  });
}

new BaseballGame();
