import { ANSWER } from '../constants.js';

const DOMUtils = {
  init: () => {
    DOMUtils.setElementId('h3', 'result-title');
    DOMUtils.hideElement('#result-title');
    DOMUtils.setElementValue('#result');
    DOMUtils.ableElement('#user-input');
    DOMUtils.ableElement('#submit');
    DOMUtils.initValue('#user-input');
    DOMUtils.getElement('#user-input').focus();
  },

  getElement: (selectors) => document.querySelector(selectors),

  setElementId: (selectors, idValue) =>
    (document.querySelector(selectors).id = idValue),

  hideElement: (selectors) =>
    (DOMUtils.getElement(selectors).style.display = 'none'),

  showElement: (selectors) =>
    (DOMUtils.getElement(selectors).style.display = ''),

  disableElement: (selectors) =>
    (DOMUtils.getElement(selectors).disabled = true),

  ableElement: (selectors) => (DOMUtils.getElement(selectors).disabled = false),

  setElementValue: (selectors, text = '') =>
    (DOMUtils.getElement(selectors).innerText = text),

  removeElement: (selectors) => {
    const element = DOMUtils.getElement(selectors);
    element.parentNode.removeChild(element);
  },
  initValue: (selectors) => {
    DOMUtils.getElement(selectors).value = '';
  },
  showResult: (text) => {
    DOMUtils.showElement('#result-title');
    DOMUtils.setElementValue('#result');
    DOMUtils.isRightAnswer(text);
  },
  isRightAnswer: (text) =>
    text === ANSWER.RIGHT
      ? DOMUtils.showGameOver(text)
      : DOMUtils.setElementValue('#result', text),
  showGameOver: (text) => {
    DOMUtils.getElement('#result').insertAdjacentHTML(
      'afterbegin',
      `<h4>${text}</h4>`
    );
    DOMUtils.getElement('#result').insertAdjacentHTML(
      'afterend',
      `<div id="game-restart-message">
            게임을 새로 시작하시겠습니까? 
            <button id="game-restart-button">게임 재시작</button>
      </div>`
    );
  },
};

export default DOMUtils;
