import { state } from './state.js';
import { USER_INPUT, SUBMIT_BUTTON } from './constants/html-doms.js';
import makeRandomNumber from './functions/make-random-number.js';
import checkUserInputValid from './functions/check-user-input-valid.js';
import setBallStrike from './functions/set-ball-strike.js';
import initBallStrikeCount from './functions/initial-state.js';
import makeResultMessage from './functions/make-result-message.js'
import makeResultDom from './functions/make-result-dom.js';

export default function BaseballGame() {
  state.computerInput = makeRandomNumber();

  this.play = function (computerInput, userInput) {
    setBallStrike(computerInput, userInput);
    const resultMessage = makeResultMessage();
    
    return resultMessage;
  };

  SUBMIT_BUTTON.addEventListener('click', () => {
    state.userInput = parseInt(USER_INPUT.value);
    initBallStrikeCount();
    if (checkUserInputValid(USER_INPUT.value)) {
      console.log(state.userInput, state.computerInput)
      const resultMessage = this.play(state.computerInput, state.userInput);
      makeResultDom(resultMessage);
    } 
  });
}

new BaseballGame();
