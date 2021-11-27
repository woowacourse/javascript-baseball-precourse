/* eslint-disable no-undef */

import Baseballgame from './Baseballgame.js';

const $submit = document.querySelector('#submit');
const $userInput = document.querySelector('#user-input');

let randomNumber = 0;
const BG = new Baseballgame();

const createRandomNumber = () => {
  const randomNumberList = Array.from({ length: 1000 }, (_v, i) => String(i))
    .filter(number => new Set(number).size === 3 && !number.match(/[0]/))
    .map(number => Number(number));
  // eslint-disable-next-line no-undef
  randomNumber =
    MissionUtils.Random.pickNumberInList(randomNumberList).toString();
  console.log(randomNumber);
};

window.addEventListener('.DOMContentLoaded', createRandomNumber());

$submit.addEventListener('click', e => {
  e.preventDefault();
  const userInputNumbers = $userInput.value;
  if (!BG.validate(userInputNumbers)) {
    window.alert('숫자, 3자리, 0을 제외한 값을 입력해주세요');
    return;
  }
  BG.play(randomNumber, userInputNumbers);
});
