import BaseballGame from './BaseballGame.js';
import { ERROR_MESSAGE, GAME_CONFIG, GAME_RESULT_STATE } from './constants.js';
import {
  checkDuplicationNumbers,
  checkOnlyNumberOfDigitsInRange,
} from './utils.js';

const BaseballGameStarter = new BaseballGame();

const submitButton = document.querySelector('#submit');
const userInputNumbers = document.querySelector('#user-input');
const gameResult = document.querySelector('#result');

userInputNumbers.addEventListener('keyup', event => {
  if (event.key === 'Enter') {
    submitButton.click();
  }
});

const bindGameRestartEvent = () => {
  const gameRestartButton = document.querySelector('#game-restart-button');

  gameRestartButton.addEventListener('click', () => {
    BaseballGameStarter.restartGame();
    gameResult.innerHTML = '';
    userInputNumbers.value = '';
    userInputNumbers.focus();
  });
};

submitButton.addEventListener('click', event => {
  event.preventDefault();
  const { MIN_NUMBER, MAX_NUMBER, LENGTH } = GAME_CONFIG;

  const isThreeDigitsNumbers = !checkOnlyNumberOfDigitsInRange(
    MIN_NUMBER,
    MAX_NUMBER,
    LENGTH,
    userInputNumbers.value,
  );
  const isDuplicationNumbers = checkDuplicationNumbers(userInputNumbers.value);

  if (isThreeDigitsNumbers || isDuplicationNumbers) {
    alert(ERROR_MESSAGE.INPUT_ERROR);
    userInputNumbers.value = '';
    userInputNumbers.focus();
    return;
  }

  const { template, status } = BaseballGameStarter.play(userInputNumbers.value);
  gameResult.innerHTML = template;
  if (status === GAME_RESULT_STATE.CORRECT) bindGameRestartEvent();
  else userInputNumbers.focus();
});
