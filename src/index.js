import { $ } from './utils/dom.js';
import {
  pickUniqueThreeNumbers,
  changeStringToNumberArray,
  validateUniqueInArray,
  validateNumberInArray,
} from './utils/index.js';

function BaseballGame () {
  this.answer = pickUniqueThreeNumbers();

  this.init = () => {
    initEventListeners();
  };

  const initEventListeners = () => {
    $('form').addEventListener('submit', onSubmitPlayerInput);
    $('#result').addEventListener('click', onClickRestartButton);
  };

  const onSubmitPlayerInput = (event) => {
    event.preventDefault();
    const input = $('#user-input').value;
    if (!validatePlayerInput(input)) return;
    const result = play(this.answer, input);
    $('#result').innerHTML = result;
  };

  const onClickRestartButton = (event) => {
    if (event.target.id === 'game-restart-button') {
      $('#result').innerHTML = '';
      $('#user-input').value = '';
      this.answer = pickUniqueThreeNumbers();
    }
  };

  const validatePlayerInput = (input) => {
    const playerInputArray = changeStringToNumberArray(input);
    if (input.length !== 3 || !validateUniqueInArray(playerInputArray) || !validateNumberInArray(playerInputArray)) {
      alert('입력 값을 확인해주세요');
      $('#user-input').value = '';
      return false;
    }
    return true;
  };

  const play = (computerInputNumberArray, playerInputNumbers) => {
    const playerInputNumberArray = changeStringToNumberArray(playerInputNumbers);
    const { strike, ball } = checkStrikeOrBall(computerInputNumberArray, playerInputNumberArray);
    const resultStrikeString = strike ? `${strike}스트라이크` : '';
    const resultBallString = ball ? `${ball}볼` : '';
    if (strike === 3) return createGameRestartButtonTemplate();
    return (!ball && !strike) ? '낫싱' : `${resultBallString} ${resultStrikeString}`;
  };

  const checkStrikeOrBall = (computerInputNumberArray, playerInputNumberArray) => {
    let strike = 0, ball = 0;
    for (let i = 0; i < 3; i += 1) {
      if (playerInputNumberArray[i] === computerInputNumberArray[i]) {
        strike += 1;
      } else if (computerInputNumberArray.includes(playerInputNumberArray[i])) {
        ball += 1;
      }
    }
    return { strike, ball };
  };

  const createGameRestartButtonTemplate = () => {
    return `
      <div>
        <p>
          <strong>🎉 정답을 맞추셨습니다! 🎉</strong>
        </p>
        <span게임을 재시작 하시겠습니까?</span>
        <button id="game-restart-button">
          게임 재시작
        </button>
      </div>
    `;
  };
}

const baseballgame = new BaseballGame();
baseballgame.init();
