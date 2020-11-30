import { ALL_MATCH_TEXT, NUMBERS_LENGTH, NUMBER_CANDIDATES } from './constants/configuration.js';

import BaseballGame from './classes/baseballGame.js';
import Opponent from './classes/opponent.js';

const baseballGame = new BaseballGame();
const opponent = new Opponent();

const playButtonElement = document.getElementById('submit');
const userInputElement = document.getElementById('user-input');
const resultElement = document.getElementById('result');
const gameRestartElement = document.getElementById('game-restart');

let randomOpponentNumbers = opponent.getRandomNumbers();

const playGame = () => {
  const playResult = baseballGame.play(randomOpponentNumbers, userInputElement.value);
  if (playResult === '') {
    alert(`잘못된 입력입니다. '서로 다른' ${NUMBERS_LENGTH}자리 숫자를 ${NUMBER_CANDIDATES} 숫자들만을 이용해서 입력해주세요!`);
    return
  }
  resultElement.innerText = playResult;
  if (playResult === ALL_MATCH_TEXT) {
    gameRestartElement.style.display = 'block';
  }
}

playButtonElement.addEventListener('click', playGame);