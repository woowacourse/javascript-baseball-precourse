import BaseballGame from './BaseballGame.js';
import { ERROR_MESSAGE, GAME_CONFIG, GAME_RESULT_STATE } from './constants.js';
import {
  checkDuplicationNumbers,
  checkDigits,
  checkNumbersInRange,
  clearInputWithFocus,
} from './utils.js';

const BaseballGameStarter = new BaseballGame();

const submitButton = document.querySelector('#submit');
const userInputNumbers = document.querySelector('#user-input');
const gameResult = document.querySelector('#result');

userInputNumbers.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') submitButton.click();
});

const bindGameRestartEvent = () => {
  const gameRestartButton = document.querySelector('#game-restart-button');

  gameRestartButton.addEventListener('click', () => {
    BaseballGameStarter.restartGame();
    gameResult.innerHTML = '';
    clearInputWithFocus(userInputNumbers);
  });
};

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const { MIN_NUMBER, MAX_NUMBER, LENGTH } = GAME_CONFIG;

  const isThreeDigitsNumbers = !checkDigits(LENGTH, userInputNumbers.value);
  const isDuplicationNumbers = checkDuplicationNumbers(userInputNumbers.value);
  const isRangedNumbers = checkNumbersInRange(
    MIN_NUMBER,
    MAX_NUMBER,
    userInputNumbers.value,
  );

  if (isThreeDigitsNumbers || isDuplicationNumbers || !isRangedNumbers) {
    alert(ERROR_MESSAGE.INPUT_ERROR);
    clearInputWithFocus(userInputNumbers);
    return;
  }

  const { template, status } = BaseballGameStarter.play(userInputNumbers.value);
  gameResult.innerHTML = template;
  if (status === GAME_RESULT_STATE.CORRECT) bindGameRestartEvent();
  else userInputNumbers.focus();
});
