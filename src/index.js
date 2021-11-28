import { pickUniqueThreeNumbers } from './utils/index.js';
import { $ } from './utils/dom.js';

function BaseballGame () {
  this.answer = pickUniqueThreeNumbers();

  this.init = () => {
    initEventListeners();
  };

  const initEventListeners = () => {
    $('form').addEventListener('submit', onSubmitPlayerInput);
  };

  const onSubmitPlayerInput = (event) => {
    event.preventDefault();
    const input = $('#user-input').value;
    checkPlayerInput(input);
    const result = play(this.answer, input);
    $('#result').innerHTML = result;
  };

  const checkPlayerInput = (input) => {
    const set = new Set();
    const isNaNArray = input.split('').map((item) => {
      set.add(item);
      return isNaN(item);
    });
    if (input.length !== 3 || isNaNArray.includes(true) || set.size !== 3) {
      alert('입력 값을 확인해주세요');
      $('#user-input').value = '';
      return;
    }
  };

  const play = (computerInputNumbers, userInputNumbers) => {
    const playerInputArray = userInputNumbers.split('').map(item => Number(item));
    let strike = 0, ball = 0;
    for (let i = 0; i < 3; i += 1) {
      if (playerInputArray[i] === computerInputNumbers[i]) {
        strike += 1;
      } else if (computerInputNumbers.includes(playerInputArray[i])) {
        ball += 1;
      }
    }
    const resultStrikeString = strike ? `${strike}스트라이크` : '';
    const resultBallString = ball ? `${ball}볼` : '';
    if (strike === 3) return createGameRestartButtonTemplate();
    return (!ball && !strike) ? '낫싱' : `${resultBallString} ${resultStrikeString}`;
  };

  const createGameRestartButtonTemplate = () => {
    return `
      <div>
        <p>
          <strong>🎉 정답을 맞추셨습니다! 🎉</strong>
        </p>
        <button id="game-restart-button">
          재시작
        </button>
      </div>
    `;
  };
}

const baseballgame = new BaseballGame();
baseballgame.init();
