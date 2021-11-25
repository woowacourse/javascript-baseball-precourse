import { state } from '../state.js';
import { RESTART_MESSAGE } from '../constants/result-message.js';
import { RESULT_DIV, SUBMIT_BUTTON } from '../constants/html-doms.js';

export function makeRestartComponent() {
  const divTag = document.createElement('div');
  const restartButton = document.createElement('button');

  restartButton.id = 'game-restart-button';
  restartButton.innerText = '게임 재시작';
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
