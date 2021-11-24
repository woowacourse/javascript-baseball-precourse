import { ANSWER_RANGE } from './asset/constant.js';
import User from './user/user.js';

export default class BaseballGame {
    constructor() {
        this.user = new User();
        this.inputForm = document.getElementById('input-form');
    }

    init() {
        this.inputForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // 유저 입력값이 유효하지 않을 때
            if (!this.user.checkInputValid()) return;
        });
    }

    play(computerInputNumbers, userInputNumbers) {
    }

    // 정답 생성
    generateAnswer() {
        const ret = new Set();

        while (ret.size < 3) {
            ret.add(MissionUtils.Random.pickNumberInRange(ANSWER_RANGE.MIN, ANSWER_RANGE.MAX));
        }

        return [...ret].join('');
    }
}

const baseballGame = new BaseballGame();

baseballGame.init();