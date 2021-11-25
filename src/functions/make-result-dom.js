import { state } from '../state.js';
import { RESTART_MESSAGE } from '../constants/result-message.js';
import { RESULT_DIV, SUBMIT_BUTTON } from '../constants/html-doms.js';
import restartGameSetting from './restart-game-setting.js'

export function makeRestartButton() {
  const restartButton = document.createElement('button');
  restartButton.innerText = '게임 재시작';
  restartButton.id = 'game-restart-button';
  restartButton.addEventListener('click', () => {
    SUBMIT_BUTTON.disabled = false;
    restartGameSetting();
  });
  return restartButton;
}

export function makeRestartComponent() {
  const divTag = document.createElement('div');
  const restartButton = makeRestartButton();

  divTag.innerText = RESTART_MESSAGE;

  divTag.appendChild(restartButton);
  RESULT_DIV.appendChild(divTag);
}

export default function makeResultDom(resultMessage) {
  RESULT_DIV.innerHTML = resultMessage;
  if (state.strikeCount === 3) {
    SUBMIT_BUTTON.disabled = true;
    makeRestartComponent();
  }
}
