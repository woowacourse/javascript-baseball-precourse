import { pickUniqueThreeNumbers } from './utils/index.js';
import { $ } from './utils/dom.js';

function BaseballGame () {
  this.answer = pickUniqueThreeNumbers();

  this.init = () => {
    initEventListeners();
  };

  const initEventListeners = () => {
    $('form').addEventListener('submit', onSubmitPlayerInput);
  };

  const onSubmitPlayerInput = (event) => {
    event.preventDefault();
    const input = $('#user-input').value;
    console.log(`제출된 값: ${input}`);
  };
}

const baseballgame = new BaseballGame();
baseballgame.init();
