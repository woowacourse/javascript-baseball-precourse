import { $ } from './utils/dom.js';
import { SELECTOR, HINT } from './constants.js';
import {
	pickUniqueThreeNumbers,
	changeStringToNumberArray,
	validateUniqueInArray,
	validateNumberInArray,
	checkSameOrInclude,
	createResultHintString,
} from './utils/index.js';

class BaseballGame {
	constructor() {
		this.computerInputNumberArray = [];
	}

	// 초기화 함수
	init() {
		this.computerInputNumberArray = pickUniqueThreeNumbers();
		this.initEventListeners();
	}

	// 재시작 함수
	restart() {
		this.computerInputNumberArray = pickUniqueThreeNumbers();
		$(SELECTOR.RESULT).innerHTML = '';
		$(SELECTOR.INPUT).value = '';
	}

	// 이벤트리스너 초기화 함수
	initEventListeners() {
		$(SELECTOR.FORM).addEventListener('submit', this.onSubmitPlayerInput.bind(this));
		$(SELECTOR.RESULT).addEventListener('click', this.onClickRestartButton.bind(this));
	}

	// 유저 입력값 검증 함수
	validatePlayerInput(playerInputArray) {
		// 길이가 3이 아닐 때 or 중복된 값이 들어있을 때 or 숫자가 아닌 값이 들어있을 때
		if (
			playerInputArray.length !== 3 ||
			!validateUniqueInArray(playerInputArray) ||
			!validateNumberInArray(playerInputArray)
		) {
			alert('입력 값을 확인해주세요');
			$(SELECTOR.INPUT).value = '';
			return false;
		}
		return true;
	}

	// 유저 입력값 제출 함수
	onSubmitPlayerInput(event) {
		event.preventDefault();
		const playerInputNumberArray = changeStringToNumberArray($(SELECTOR.INPUT).value);
		if (!this.validatePlayerInput(playerInputNumberArray)) return;
		const result = this.play(this.computerInputNumberArray, playerInputNumberArray);
		$(SELECTOR.RESULT).innerHTML = result;
	}

	// 재시작 버튼 클릭 함수
	onClickRestartButton(event) {
		if (event.target.id === SELECTOR.RESTART_BUTTON) {
			this.restart();
		}
	}

	// 게임 시작 함수
	play(computerInputNumberArray, playerInputNumberArray) {
		const [strikeCount, ballCount] = checkSameOrInclude(
			computerInputNumberArray,
			playerInputNumberArray,
		);
		if (strikeCount === 3) return this.createGameRestartButtonTemplate();
		// 볼도 아니고 스트라이크도 아닐 때
		return !ballCount && !strikeCount
			? HINT.NOTHING
			: `${createResultHintString(ballCount, HINT.BALL)} ${createResultHintString(
					strikeCount,
					HINT.STRIKE,
			  )}`;
	}

	// 재시작 버튼 템플릿 생성 함수
	createGameRestartButtonTemplate() {
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
	}
}

const baseballgame = new BaseballGame();
baseballgame.init();
