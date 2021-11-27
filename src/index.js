import { $ } from './util/dom.js';
import {
  MAX_RANDOM_NUMBER,
  MIN_RANDOM_NUMBER,
  BALL,
  STRIKE,
  VALID_NUMBER_LENGTH,
} from './constants/index.js';
import { getRandomNumber, isValidInput } from './number.js';

const $userInput = $('#user-input');
const $submit = $('#submit');
const $form = $('form');
const $result = $('#result');

function BaseballGame() {
  this.randomNumber;
  this.score = {
    [BALL]: 0,
    [STRIKE]: 0,
  };
  this.gameOver = false;

  this.init = () => {
    initEventListener();
    setRandomNumber();
  };

  this.play = (computerInputNumbers, userInputNumbers) => {
    clearScore();
    setScore(computerInputNumbers, userInputNumbers);
    this.gameOver = false;
    const message = makeMessage();
    renderResultMessage(message);
  };

  const setScore = (computerInputNumbers, userInputNumbers) => {
    [...userInputNumbers].forEach((number, idx) => {
      if (computerInputNumbers[idx] === number) {
        this.score[STRIKE] += 1;
      } else if (computerInputNumbers.includes(number)) {
        this.score[BALL] += 1;
      }
    });
  };
  const makeMessage = () => {
    if (isNothing()) {
      return '낫싱';
    }
    if (isAnswer()) {
      this.gameOver = true;
      return '🎉정답을 맞추셨습니다!🎉';
    }
    return makeBallStrikeMessage();
  };
  const isNothing = () => this.score[BALL] === 0 && this.score[STRIKE] === 0;
  const isAnswer = () => this.score[STRIKE] === VALID_NUMBER_LENGTH;

  const makeBallStrikeMessage = () => {
    return Object.entries(this.score)
      .filter(([scoreName, score]) => score)
      .map(([scoreName, score]) => `${score}${scoreName}`)
      .join(' ');
  };
  const clearScore = () => {
    this.score[BALL] = 0;
    this.score[STRIKE] = 0;
  };

  const renderResultMessage = (message) => {
    $result.innerHTML = this.gameOver
      ? `<p class=box>${message}</p> <p>게임을 새로 시작하시겠습니까? <button id=game-restart-button>재시작</button></p>`
      : `<p class=box>${message}</p>`;
  };

  const setUserInput = () => {
    const userInput = getUserInput();
    if (!isValidInput(userInput)) {
      clearInput();
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

  const restartGame = () => {
    clearInput();
    resultClear();
    this.gameOver = false;
    setRandomNumber();
  };
  const clearInput = () => {
    $userInput.value = '';
  };
  const resultClear = () => {
    $result.innerHTML = '';
  };
  const initEventListener = () => {
    $form.addEventListener('submit', (e) => e.preventDefault());
    $submit.addEventListener('click', setUserInput);
    $result.addEventListener('click', (e) => {
      if (e.target.id === 'game-restart-button') {
        restartGame();
        return;
      }
    });
  };
}
const game = new BaseballGame();
game.init();
