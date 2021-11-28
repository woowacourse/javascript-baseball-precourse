/* eslint-disable no-undef */

import Baseballgame from './Baseballgame.js';

const BG = new Baseballgame();

// DOM Nodes -------------------------------------------------
const $app = document.querySelector('#app');
const $submit = document.querySelector('#submit');
const $userInput = document.querySelector('#user-input');
const $result = document.querySelector('#result');

let randomNumber = '';
let userInputNumbers = 0;

// function --------------------------------------------------
const createRandomNumber = () => {
  while (randomNumber.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomNumber.includes(number)) {
      randomNumber += number;
    }
  }
};

const init = () => {
  randomNumber = '';
  $result.textContent = '';
  $submit.disabled = false;

  createRandomNumber();
};

const validate = userInputNumbers => {
  if (new Set(userInputNumbers).size !== 3) return false;
  if (Number.isNaN(userInputNumbers)) return false;
  if (userInputNumbers.match(/[0]/)) return false;
  return true;
};

const render = () => {
  const gameResult = BG.play(randomNumber, userInputNumbers);
  if (gameResult === '정답') {
    $result.innerHTML = `🌟 정답을 맞췄습니다. 재시작하시겠습니까?
     <button id="game-restart-button">재시작</button>`;
    $submit.disabled = true;
  } else {
    $result.textContent = gameResult;
  }
};

// Event Bindings -----------------------------------------------------
window.addEventListener('.DOMContentLoaded', init());

$submit.addEventListener('click', e => {
  e.preventDefault();
  userInputNumbers = $userInput.value;
  if (!validate(userInputNumbers)) {
    window.alert('숫자, 3자리, 0을 제외한 값을 입력해주세요');
    $userInput.focus();
    return;
  }
  render();
});

$app.addEventListener('click', e => {
  if (e.target.id !== 'game-restart-button') return;
  init();
  $userInput.focus();
});
