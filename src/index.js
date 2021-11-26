import displaySuccess from './ui/displaySuccess.js';
import displayText from './ui/displayText.js';
import getBallCount from './utils/getBallCount.js';
import getStrikeCount from './utils/getStrikeCount.js';
import removeChildren from './utils/removeChildren.js';
import generateComputerInput from './library/generateComputerInput.js';
import { RESULT_SUCCESS, RESULT_NOTHING } from './consts.js';
import { ACTION_RESTART } from './ui/consts.js';

export default class BaseballGame {
  constructor(app, input, container) {
    this.app = app;
    this.input = input;
    this.container = container;

    this.computerInput = generateComputerInput();
  }

  static play(computerInputNumbers, userInputNumbers) {
    if (computerInputNumbers === userInputNumbers) return RESULT_SUCCESS;

    const ball = getBallCount(computerInputNumbers, userInputNumbers);
    const strike = getStrikeCount(computerInputNumbers, userInputNumbers);

    if (ball === 0 && strike === 0) return RESULT_NOTHING;

    let result = '';
    if (ball) result += `${ball}볼 `;
    if (strike) result += `${strike}스트라이크`;

    return result;
  }

  displayResult(result) {
    removeChildren(this.container);

    if (result === RESULT_SUCCESS) displaySuccess(this.container);
    else displayText(this.container, result);
  }

  [ACTION_RESTART](e) {
    e.preventDefault();

    removeChildren(this.container);
    this.computerInput = generateComputerInput();
    this.input.value = '';
  }
}
