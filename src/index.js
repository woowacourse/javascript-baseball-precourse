import { $ } from './util/dom.js';
import {
  MAX_RANDOM_NUMBER,
  MIN_RANDOM_NUMBER,
  BALL,
  STRIKE,
} from './constants/index.js';
import { getRandomNumber, isValidInput } from './number.js';

const $userInput = $('#user-input');
const $submit = $('#submit');
const $form = $('form');

function BaseballGame() {
  this.randomNumber;
  this.score = {
    [BALL]: 0,
    [STRIKE]: 0,
  };

  this.init = () => {
    initEventListener();
    setRandomNumber();
  };

  this.play = (computerInputNumbers, userInputNumbers) => {
    clearScore();
    setScore(computerInputNumbers, userInputNumbers);
  };

  const setScore = (computerInputNumbers, userInputNumbers) => {
    [...userInputNumbers].forEach((number, idx) => {
      if (computerInputNumbers[idx] === number) {
        this.score[STRIKE] += 1;
      } else if (computerInputNumbers.includes(number)) {
        this.score[BALL] += 1;
      }
    });
    console.log(this.score);
  };
  const clearScore = () => {
    this.score[BALL] = 0;
    this.score[STRIKE] = 0;
  };
  const setUserInput = () => {
    const userInput = getUserInput();
    if (!isValidInput(userInput)) {
      $userInput.value = '';
      $userInput.focus();
      alert('서로 다른 3자리 수를 입력해 주세요.');
      return;
    }
    this.play(this.randomNumber, userInput);
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
