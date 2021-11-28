import { $ } from './utils/dom.js';
import {
  pickUniqueThreeNumbers,
  changeStringToNumberArray,
  validateUniqueInArray,
  validateNumberInArray,
} from './utils/index.js';
import {
  SELECTOR,
  HINT,
} from './constants.js';

function BaseballGame () {
  this.answer = pickUniqueThreeNumbers();

  this.init = () => {
    initEventListeners();
  };

  const initEventListeners = () => {
    $(SELECTOR.FORM).addEventListener('submit', onSubmitPlayerInput);
    $(SELECTOR.RESULT).addEventListener('click', onClickRestartButton);
  };

  const onSubmitPlayerInput = (event) => {
    event.preventDefault();
    const input = $(SELECTOR.INPUT).value;
    if (!validatePlayerInput(input)) return;
    const result = play(this.answer, input);
    $(SELECTOR.RESULT).innerHTML = result;
  };

  const onClickRestartButton = (event) => {
    if (event.target.id === SELECTOR.RESTART_BUTTON) {
      $(SELECTOR.RESULT).innerHTML = '';
      $(SELECTOR.INPUT).value = '';
      this.answer = pickUniqueThreeNumbers();
    }
  };

  const validatePlayerInput = (input) => {
    const playerInputArray = changeStringToNumberArray(input);
    if (input.length !== 3 || !validateUniqueInArray(playerInputArray) || !validateNumberInArray(playerInputArray)) {
      alert('입력 값을 확인해주세요');
      $(SELECTOR.INPUT).value = '';
      return false;
    }
    return true;
  };

  const play = (computerInputNumberArray, playerInputNumbers) => {
    const playerInputNumberArray = changeStringToNumberArray(playerInputNumbers);
    const { strike, ball } = checkStrikeOrBall(computerInputNumberArray, playerInputNumberArray);
    const resultStrikeString = strike ? `${strike}${HINT.STRIKE}` : '';
    const resultBallString = ball ? `${ball}${HINT.BALL}` : '';
    if (strike === 3) return createGameRestartButtonTemplate();
    return (!ball && !strike) ? HINT.NOTHING : `${resultBallString} ${resultStrikeString}`;
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
        <button id="${SELECTOR.RESTART_BUTTON}">
          게임 재시작
        </button>
      </div>
    `;
  };
}

const baseballgame = new BaseballGame();
baseballgame.init();
