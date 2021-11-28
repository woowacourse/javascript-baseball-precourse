import { state } from '../state/index.js';
import { USER_INPUT, RESULT_DIV } from '../constants/html-doms.js';
import { isUserInputValid, setUserInput } from '../functions/user-input.js';
import { initBallStrike } from './util.js';
import { makeResultDom } from '../functions/game-result.js';

export function onSubmitClick(event, play) {
  event.preventDefault();
  setUserInput(parseInt(USER_INPUT.value));
  initBallStrike();
  if (isUserInputValid(USER_INPUT.value)) {
    const resultMessage = play(state.computerInput, state.userInput);
    makeResultDom(resultMessage);
  } else {
    USER_INPUT.value = '';
    USER_INPUT.focus();
    RESULT_DIV.innerHTML = '';
  }
}
