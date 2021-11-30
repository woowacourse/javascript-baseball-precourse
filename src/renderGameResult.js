import { CONSTRAIN, COUNT, MESSAGE } from './utils/constant.js';

const resultTemplate = resultTxt => {
  const winCount = `${CONSTRAIN.INPUT_LENGTH}${COUNT.STRIKE}`;

  if (resultTxt === winCount) {
    return `<h3><strong>${MESSAGE.WIN}</strong></h3>
    <div>
    <span>${MESSAGE.RESTART}</span>
    <button id="game-restart-button">게임 재시작</button>
    </div>`;
  }

  return `<p>${resultTxt}</p>`;
};

export const renderGameResult = (resultElement, resultTxt) => {
  resultElement.innerHTML = resultTemplate(resultTxt);
};
