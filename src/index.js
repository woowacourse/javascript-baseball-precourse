import BaseballGame from './lib/baseballGame.js';

const baseballGame = new BaseballGame();

const $userInput = document.getElementById('user-input');
const $submit = document.getElementById('submit');
const $result = document.getElementById('result');

$submit.onclick = e => {
  e.preventDefault();

  const userInputNumbers = $userInput.value;
  const result = baseballGame.play(baseballGame.answer, userInputNumbers);

  $result.textContent = result;

  $userInput.value = '';
};
