import { state } from '../state.js';
import { RESTART_MESSAGE } from '../constants/result-message.js';

export function makeRestartComponent() {
  const resultDiv = document.getElementById('result');
  const divTag = document.createElement('div');
  const restartButton = document.createElement('button');

  restartButton.id = 'game-restart-button';
  restartButton.innerText = '게임 재시작';
  divTag.innerText = RESTART_MESSAGE;
  divTag.appendChild(restartButton);
  resultDiv.appendChild(divTag);
}

export default function makeResultDom(resultMessage) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = resultMessage;
  if (state.strikeCount === 3) {
    document.getElementById('submit').disabled = true;
    makeRestartComponent();
  }
}
