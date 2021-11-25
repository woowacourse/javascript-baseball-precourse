import { state } from './state/index.js';
import { USER_INPUT, SUBMIT_BUTTON } from './constants/html-doms.js';
import { makeResultMessage, makeResultDom } from './functions/result.js';
import { isUserInputValid } from './functions/userInput.js';

export default function BaseballGame() {
  state.makeRandomNumber();
  this.play = function (computerInput, userInput) {
    state.setBallStrike(computerInput, userInput);

    return makeResultMessage();
  };

  SUBMIT_BUTTON.addEventListener('click', event => {
    event.preventDefault();
    state.setUserInput(parseInt(USER_INPUT.value));
    state.initBallStrike();
    if (isUserInputValid(USER_INPUT.value)) {
      const resultMessage = this.play(state.computerInput, state.userInput);
      makeResultDom(resultMessage);
    }
  });
}

new BaseballGame();
