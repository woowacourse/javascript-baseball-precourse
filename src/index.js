import utils from './utils/utils.js';
import DOMUtils from './utils/DOMUtils.js';
import isValidNumbers from './utils/isValidNumbers.js';

export default function BaseballGame() {
  const userInputForm = DOMUtils.getElement('form');
  const userInput = DOMUtils.getElement('#user-input');
  let computerInputNumbers = [];

  this.init = function () {
    DOMUtils.setElementId('h3', 'resultTitle');
    DOMUtils.hideElement('#resultTitle');
    DOMUtils.initElementValue('#result');
    computerInputNumbers = utils.pickUniqueThreeNumbers();
  };

  this.play = function (computerInputNumbers, userInputNumbers) {
    const scoreBoard = { ball: 0, strike: 0 };

    console.log(computerInputNumbers);
    console.log(userInputNumbers);
    console.log(scoreBoard);

    //return '결과 값 String';
  };

  this.init();

  userInputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    isValidNumbers(userInput) &&
      this.play(computerInputNumbers, utils.stringToNumArray(userInput.value));
  });
}

new BaseballGame();
