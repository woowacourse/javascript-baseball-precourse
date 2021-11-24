import User from './user/user.js';
import Computer from './computer/computer.js';
import { ANSWER_LENGTH, CORRECT_SIGNAL } from './asset/constant.js';

export default class BaseballGame {
    constructor() {
        this.user = new User();
        this.computer = new Computer();
        this.app = document.getElementById('app');
        this.inputForm = document.getElementById('input-form');
        this.resultBox = document.getElementById('result');
        this.restartButton = document.getElementById('game-restart-button');
    }

    init() {
        this.triggerSubmitEvent();
        this.triggerRestartEvent();
    }

    triggerSubmitEvent() {
        this.inputForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userInputVal = this.user.getUserInputValue();

            if (!this.user.checkInputValid(userInputVal)) return;

            const result = this.play(this.computer.getAnswer(), userInputVal);
            if (result == CORRECT_SIGNAL) {
                this.app.classList.add(CORRECT_SIGNAL);
            } else {
                this.resultBox.innerText = result;
            }
        });
    }

    triggerRestartEvent() {
        this.restartButton.addEventListener('click', () => {
            this.user.setUserInputValue('');
            this.computer.setAnswer(this.computer.generateAnswer());
            this.resultBox.innerText = '';
            this.app.classList.remove(CORRECT_SIGNAL);
        });
    }

    /**
     * @param {string} computerInputNumbers 컴퓨터 값
     * @param {string} userInputNumbers 유저 입력값
     * @brief 유저 입력값이 컴퓨터 값과 얼마나 매칭되는지 string form 리턴
     * @return {string}
     */
    play(computerInputNumbers, userInputNumbers) {
        const { strikeCnt, ballCnt } = this.computer.getStrikeBallCnt(computerInputNumbers, userInputNumbers);

        if (strikeCnt == ANSWER_LENGTH) {
            return CORRECT_SIGNAL;
        }

        return this.computer.getAnnouncement(strikeCnt, ballCnt)
    }
}

const baseballGame = new BaseballGame();

baseballGame.init();
