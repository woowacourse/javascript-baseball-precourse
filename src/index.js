import utils from './utils.js';
import isValidNumbers from './isValidNumbers.js';

const userInputForm = document.querySelector('form');
const userInput = document.querySelector('#user-input');
let computerInputNumbers = [];

init();

userInputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  isValidNumbers(userInput) && console.log('모든 조건 통과');
});

function init() {
  document.querySelector('h3').style.display = 'none';
  document.querySelector('#result').innerText = '';
  computerInputNumbers = utils.pickUniqueThreeNumbers();
}
