import { ANSWER_HTML } from '../constants/constant.js';

export const showResult = (ballCount, strikeCount) => {
  if (strikeCount === 3) {
    return renderCorrectResult();
  }
  const resultMessage = getResultMessage(ballCount, strikeCount);
  renderHintResult(resultMessage);
};

const getResultMessage = (ballCount, strikeCount) => {
  if (ballCount === 0 && strikeCount === 0) {
    return `낫싱`;
  }
  if (ballCount > 0 && strikeCount === 0) {
    return `${ballCount}볼`;
  }
  if (ballCount === 0 && strikeCount > 0) {
    return `${strikeCount}스트라이크`;
  }
  if (ballCount > 0 && strikeCount > 0) {
    return `${ballCount}볼 ${strikeCount}스트라이크`;
  }
};

const renderHintResult = (resultMessage) => {
  const result = document.querySelector('#result');
  result.innerHTML = resultMessage;
};

const renderCorrectResult = () => {
  const result = document.querySelector('#result');
  result.innerHTML = ANSWER_HTML;
};
