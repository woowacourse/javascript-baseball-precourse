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
  this.computerInputNumberArray = [];

  this.init = () => {
    this.computerInputNumberArray = pickUniqueThreeNumbers();
    $(SELECTOR.RESULT).innerHTML = '';
    $(SELECTOR.INPUT).value = '';
    initEventListeners();
  };

  const initEventListeners = () => {
    $(SELECTOR.FORM).addEventListener('submit', onSubmitPlayerInput);
    $(SELECTOR.RESULT).addEventListener('click', onClickRestartButton);
  };

  const onSubmitPlayerInput = (event) => {
    event.preventDefault();
    const playerInputString = $(SELECTOR.INPUT).value;
    const playerInputNumberArray = changeStringToNumberArray(playerInputString);
    if (!validatePlayerInput(playerInputNumberArray)) return;
    const result = play(this.computerInputNumberArray, playerInputNumberArray);
    $(SELECTOR.RESULT).innerHTML = result;
  };

  const onClickRestartButton = (event) => {
    if (event.target.id === SELECTOR.RESTART_BUTTON) {
      this.init();
    }
  };

  const validatePlayerInput = (playerInputArray) => {
    if (playerInputArray.length !== 3 || !validateUniqueInArray(playerInputArray) || !validateNumberInArray(playerInputArray)) {
      alert('입력 값을 확인해주세요');
      $(SELECTOR.INPUT).value = '';
      return false;
    }
    return true;
  };

  const play = (computerInputNumberArray, playerInputNumberArray) => {
    const { strikeCount, ballCount } = checkStrikeOrBall(computerInputNumberArray, playerInputNumberArray);
    const resultStrikeString = strikeCount ? `${strikeCount}${HINT.STRIKE}` : '';
    const resultBallString = ballCount ? `${ballCount}${HINT.BALL}` : '';
    if (strikeCount === 3) return createGameRestartButtonTemplate();
    return (!ballCount && !strikeCount) ? HINT.NOTHING : `${resultBallString} ${resultStrikeString}`;
  };

  const checkStrikeOrBall = (computerInputNumberArray, playerInputNumberArray) => {
    let strikeCount = 0, ballCount = 0;
    for (let i = 0; i < 3; i += 1) {
      if (playerInputNumberArray[i] === computerInputNumberArray[i]) {
        strikeCount += 1;
      } else if (computerInputNumberArray.includes(playerInputNumberArray[i])) {
        ballCount += 1;
      }
    }
    return { strikeCount, ballCount };
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
