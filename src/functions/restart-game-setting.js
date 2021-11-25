import { state } from '../state.js';
import initBallStrikeCount, { initUserComputerInput } from './initial-state.js';
import makeRandomNumber from './make-random-number.js';
import { RESULT_DIV, USER_INPUT } from '../constants/html-doms.js';

export default function restartGameSetting() {
  initBallStrikeCount();
  initUserComputerInput();
  state.computerInput = makeRandomNumber();
  RESULT_DIV.innerHTML = '';
  USER_INPUT.value = '';
}
