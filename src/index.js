import { $ } from './util/dom.js';
import { MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from './constants/index.js';
import { getRandomNumber, isValidInput } from './number.js';

const $userInput = $('#user-input');
const $submit = $('#submit');
const $form = $('form');

function BaseballGame() {
  this.randomNumber;
  this.userInput;

  this.init = () => {
    initEventListener();
    setRandomNumber();
  };

  const setUserInput = () => {
    const input = getUserInput();
    if (!isValidInput(input)) {
      $userInput.value = '';
      $userInput.focus();
      alert('서로 다른 3자리 수를 입력해 주세요.');
      return;
    }
    this.userInput = input;
  };
  const getUserInput = () => $userInput.value;

  const setRandomNumber = () => {
    this.randomNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  };
  const initEventListener = () => {
    $form.addEventListener('submit', (e) => e.preventDefault());
    $submit.addEventListener('click', setUserInput);
  };
}
const game = new BaseballGame();
game.init();
