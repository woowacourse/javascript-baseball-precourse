import displaySuccess from './ui/displaySuccess.js';
import displayText from './ui/displayText.js';
import formatBallStrike from './utils/formatBallStrike.js';
import getBallCount from './utils/getBallCount.js';
import getStrikeCount from './utils/getStrikeCount.js';
import removeChildren from './utils/removeChildren.js';
import isValidInput from './utils/isValidInput.js';
import generateComputerInput from './library/generateComputerInput.js';
import { RESULT_SUCCESS, RESULT_NOTHING } from './consts.js';
import {
  ACTION_RESTART, ACTION_CHECK, MSG_ERROR, ID_APP, ID_INPUT, ID_CHECK_BUTTON, ID_RESULT,
} from './ui/consts.js';

export default class BaseballGame {
  constructor(app, input, button, container) {
    this.app = app;
    this.input = input;
    this.button = button;
    this.container = container;

    this.computerInput = generateComputerInput();

    this.app.onclick = this.onClick.bind(this);
    this.button.dataset.action = ACTION_CHECK;
  }

  static play(computerInputNumbers, userInputNumbers) {
    if (computerInputNumbers === userInputNumbers) return RESULT_SUCCESS;

    const ball = getBallCount(computerInputNumbers, userInputNumbers);
    const strike = getStrikeCount(computerInputNumbers, userInputNumbers);

    if (ball === 0 && strike === 0) return RESULT_NOTHING;

    return formatBallStrike(ball, strike);
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
    this.input.focus();
  }

  [ACTION_CHECK](e) {
    e.preventDefault();
    const isValid = isValidInput(this.input.value);

    if (!isValid) {
      alert(MSG_ERROR);

      this.input.value = '';
      this.input.focus();

      return;
    }

    const result = BaseballGame.play(this.input.value, this.computerInput);
    this.displayResult(result);
  }

  onClick(event) {
    const { action } = event.target.dataset;

    if (action) {
      this[action](event);
    }
  }
}

const app = document.getElementById(ID_APP);
const input = document.getElementById(ID_INPUT);
const button = document.getElementById(ID_CHECK_BUTTON);
const container = document.getElementById(ID_RESULT);

new BaseballGame(app, input, button, container);
