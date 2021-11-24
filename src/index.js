import User from './user/user.js';
import Computer from './computer/computer.js';

export default class BaseballGame {
    constructor() {
        this.user = new User();
        this.computer = new Computer();
        this.inputForm = document.getElementById('input-form');
        this.resultBox = document.getElementById('result');
    }

    init() {
        this.inputForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userInputVal = this.user.getUserInputValue();

            if (!this.user.checkInputValid(userInputVal)) return;

            const result = this.play(this.computer.getAnswer(), userInputVal);

            if (result == 'correct') {

            } else {
                this.resultBox.innerText = result;
            }
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

        if (strikeCnt == 3) {
            return 'correct';
        }

        return this.computer.getAnnouncement(strikeCnt, ballCnt)
    }
}

const baseballGame = new BaseballGame();

baseballGame.init();