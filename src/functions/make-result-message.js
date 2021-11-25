import { state } from '../state.js';
import { NOTHING_MESSAGE, CLEAR_MESSAGE } from '../constants/result-message.js';

export default function makeResultMessage() {
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
