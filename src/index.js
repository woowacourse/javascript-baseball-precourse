import { $ } from './util/dom.js';
import {
  MAX_RANDOM_NUMBER,
  MIN_RANDOM_NUMBER,
  BALL_NAME,
  STRIKE_NAME,
  VALID_NUMBER_LENGTH,
} from './constants/index.js';
import { getRandomNumber, isValidInput } from './number.js';

const $userInput = $('#user-input');
const $submit = $('#submit');
const $form = $('form');
const $result = $('#result');

function BaseballGame() {
  this.randomNumber;
  this.gameEnd = false;

  this.init = () => {
    initEventListener();
    setRandomNumber();
  };

  const startGame = () => {
    const userInput = getUserInput();
    if (!isValidInput(userInput)) {
      clearInput();
      $userInput.focus();
      alert('서로 다른 3자리 수를 입력해 주세요.');
      return;
    }
    this.gameEnd = false;
    const message = this.play(this.randomNumber, userInput);
    renderResultMessage(message);
  };

  this.play = (computerInputNumbers, userInputNumbers) => {
    const [ball, strike] = getCalcScore(computerInputNumbers, userInputNumbers);
    return makeMessage(ball, strike);
  };
  const getUserInput = () => $userInput.value;

  const getCalcScore = (computerInputNumbers, userInputNumbers) => {
    let strike = 0;
    let ball = 0;
    [...userInputNumbers].forEach((number, idx) => {
      if (computerInputNumbers[idx] === number) {
        strike += 1;
      } else if (computerInputNumbers.includes(number)) {
        ball += 1;
      }
    });
    return [ball, strike];
  };

  const makeMessage = (ball, strike) => {
    if (isNothing(ball, strike)) {
      return '낫싱';
    }
    if (isAnswer(strike)) {
      this.gameEnd = true;
      return '🎉정답을 맞추셨습니다!🎉';
    }
    return makeBallStrikeMessage(ball, strike);
  };
  const isNothing = (ball, strike) => ball === 0 && strike === 0;
  const isAnswer = (strike) => strike === VALID_NUMBER_LENGTH;
  const makeBallStrikeMessage = (ball, strike) => {
    const messageArray = [];
    if (ball) {
      messageArray.push(makeBallMessage(ball));
    }
    if (strike) {
      messageArray.push(makeStrikeMessage(strike));
    }
    return messageArray.join(' ');
  };
  const makeBallMessage = (ball) => `${ball}${BALL_NAME}`;
  const makeStrikeMessage = (strike) => `${strike}${STRIKE_NAME}`;

  const renderResultMessage = (message) => {
    $result.innerHTML = this.gameEnd
      ? messageWithRestartButton(message)
      : `<p class=box>${message}</p>`;
  };
  const messageWithRestartButton = (message) =>
    `<p class=box>${message}</p> <p>게임을 새로 시작하시겠습니까? <button id=game-restart-button>재시작</button></p>`;

  const restartGame = () => {
    clearInput();
    resultClear();
    this.gameEnd = false;
    setRandomNumber();
  };

  const setRandomNumber = () => {
    this.randomNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  };
  const clearInput = () => {
    $userInput.value = '';
  };
  const resultClear = () => {
    $result.innerHTML = '';
  };

  const initEventListener = () => {
    $form.addEventListener('submit', (e) => e.preventDefault());
    $submit.addEventListener('click', startGame);
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
