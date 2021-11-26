import utils from './utils/utils.js';
import DOMUtils from './utils/DOMUtils.js';
import isValidNumbers from './utils/isValidNumbers.js';

const userInputForm = DOMUtils.getElement('form');
const userInput = DOMUtils.getElement('#user-input');
let computerInputNumbers = [];

init();

userInputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  isValidNumbers(userInput) && console.log('모든 조건 통과');
});

function init() {
  DOMUtils.setElementId('h3', 'resultTitle');
  DOMUtils.hideElement('#resultTitle');
  DOMUtils.initElementValue('#result');
  computerInputNumbers = utils.pickUniqueThreeNumbers();
}
