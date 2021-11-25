import util from './util.js';

let computerInputNumbers = [];

init();

function init() {
  document.querySelector('h3').style.display = 'none';
  document.querySelector('#result').innerText = '';
  computerInputNumbers = util.pickUniqueThreeNumbers();
}
