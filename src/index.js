/* eslint-disable no-undef */

import Baseballgame from './Baseballgame.js';

const $submit = document.querySelector('#submit');
const $userInput = document.querySelector('#user-input');
const $result = document.querySelector('#result');

let randomNumber = 0;
let userInputNumbers = 0;
const BG = new Baseballgame();

const init = () => {
  $result.textContent = '';
};

const render = () => {
  const gameResult = BG.play(randomNumber, userInputNumbers);
  if (gameResult === '정답') {
    $result.innerHTML = `정답을 맞췄습니다. 
    재시작하시겠습니까? <button id="game-restart-button">재시작</button>`;
  } else {
    $result.textContent = gameResult;
  }
};

const createRandomNumber = () => {
  init();
  const randomNumberList = Array.from({ length: 1000 }, (_v, i) => String(i))
    .filter(number => new Set(number).size === 3 && !number.match(/[0]/))
    .map(number => Number(number));
  randomNumber =
    MissionUtils.Random.pickNumberInList(randomNumberList).toString();
  console.log('randomNumber: ', randomNumber);
};

window.addEventListener('.DOMContentLoaded', createRandomNumber());

$submit.addEventListener('click', e => {
  e.preventDefault();
  userInputNumbers = $userInput.value;
  if (!BG.validate(userInputNumbers)) {
    window.alert('숫자, 3자리, 0을 제외한 값을 입력해주세요');
    return;
  }
  render();
});

window.addEventListener('click', e => {
  if (e.target.id !== 'game-restart-button') return;
  init();
  createRandomNumber();
});
