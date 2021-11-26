import getBallCount from './utils/getBallCount.js';
import getStrikeCount from './utils/getStrikeCount.js';
import removeChildren from './utils/removeChildren.js';
import generateComputerInput from './library/generateComputerInput.js';
import {
  RESULT_SUCCESS, RESULT_NOTHING, MSG_SUCCESS, MSG_RESTART, ACTION_RESTART,
} from './consts.js';

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

  static displaySuccess(parent) {
    const heading = document.createElement('h4');
    heading.innerText = MSG_SUCCESS;

    const typography = document.createElement('span');
    typography.innerText = MSG_RESTART;

    const button = document.createElement('button');
    button.textContent = '게임 재시작';
    button.dataset.action = ACTION_RESTART;

    parent.appendChild(heading);
    parent.appendChild(typography);
    parent.appendChild(button);
  }

  static displayText(parent, text) {
    const typography = document.createElement('span');
    typography.innerText = text;

    parent.appendChild(typography);
  }

  displayResult(result) {
    removeChildren(this.container);

    if (result === RESULT_SUCCESS) this.displaySuccess(this.container);
    else this.displayText(this.container, result);
  }

  [ACTION_RESTART](e) {
    e.preventDefault();

    removeChildren(this.container);
    this.computerInput = generateComputerInput();
    this.input.value = '';
  }
}
