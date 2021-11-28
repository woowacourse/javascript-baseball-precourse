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

  // 초기화 함수
  this.init = () => {
    this.computerInputNumberArray = pickUniqueThreeNumbers();
    $(SELECTOR.RESULT).innerHTML = '';
    $(SELECTOR.INPUT).value = '';
    initEventListeners();
  };

  // 이벤트리스너 초기화 함수
  const initEventListeners = () => {
    $(SELECTOR.FORM).addEventListener('submit', onSubmitPlayerInput);
    $(SELECTOR.RESULT).addEventListener('click', onClickRestartButton);
  };

  // 유저 입력값 제출 함수
  const onSubmitPlayerInput = (event) => {
    event.preventDefault();
    const playerInputString = $(SELECTOR.INPUT).value;
    const playerInputNumberArray = changeStringToNumberArray(playerInputString);
    if (!validatePlayerInput(playerInputNumberArray)) return;
    const result = play(this.computerInputNumberArray, playerInputNumberArray);
    $(SELECTOR.RESULT).innerHTML = result;
  };

  // 재시작 버튼 클릭 함수
  const onClickRestartButton = (event) => {
    if (event.target.id === SELECTOR.RESTART_BUTTON) {
      this.init();
    }
  };

  // 유저 입력값 검증 함수
  const validatePlayerInput = (playerInputArray) => {
    if (playerInputArray.length !== 3 || !validateUniqueInArray(playerInputArray) || !validateNumberInArray(playerInputArray)) {
      alert('입력 값을 확인해주세요');
      $(SELECTOR.INPUT).value = '';
      return false;
    }
    return true;
  };

  // 게임 시작 함수
  const play = (computerInputNumberArray, playerInputNumberArray) => {
    const { strikeCount, ballCount } = checkStrikeOrBall(computerInputNumberArray, playerInputNumberArray);
    const resultStrikeString = strikeCount ? `${strikeCount}${HINT.STRIKE}` : '';
    const resultBallString = ballCount ? `${ballCount}${HINT.BALL}` : '';
    if (strikeCount === 3) return createGameRestartButtonTemplate();
    return (!ballCount && !strikeCount) ? HINT.NOTHING : `${resultBallString} ${resultStrikeString}`;
  };

  // 스트라이크 or 볼 개수 확인 함수
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

  // 재시작 버튼 템플릿 생성 함수
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
