import { state } from '../state/index.js';
import { RESTART_MESSAGE, NOTHING_MESSAGE, CLEAR_MESSAGE } from '../constants/result-message.js';
import { RESULT_DIV, SUBMIT_BUTTON, USER_INPUT } from '../constants/html-doms.js';

function restartGameSetting() {
  state.initBallStrike();
  state.initUserInput();
  state.makeRandomNumber();
  RESULT_DIV.innerHTML = '';
  USER_INPUT.value = '';
}

function makeRestartButton() {
  const restartButton = document.createElement('button');

  restartButton.innerText = '게임 재시작';
  restartButton.id = 'game-restart-button';

  restartButton.addEventListener('click', event => {
    event.preventDefault();
    SUBMIT_BUTTON.disabled = false;
    restartGameSetting();
  });

  return restartButton;
}

function makeRestartComponent() {
  const divTag = document.createElement('div');
  const restartButton = makeRestartButton();

  divTag.innerHTML = RESTART_MESSAGE;

  divTag.appendChild(restartButton);
  RESULT_DIV.appendChild(divTag);
}

export function makeResultDom(resultMessage) {
  RESULT_DIV.innerHTML = resultMessage;
  if (state.strikeCount === 3) {
    SUBMIT_BUTTON.disabled = true;
    makeRestartComponent();
  }
}

export function makeResultMessage() {
  let resultMessage = '';
  if (state.ballCount > 0) {
    resultMessage += `${state.ballCount}볼 `;
  }
  if (state.strikeCount > 0) {
    resultMessage += `${state.strikeCount}스트라이크`;
  }
  if (state.ballCount === 0 && state.strikeCount === 0) {
    resultMessage = NOTHING_MESSAGE;
  }
  if (state.strikeCount === 3) {
    resultMessage = CLEAR_MESSAGE;
  }

  return resultMessage;
}
