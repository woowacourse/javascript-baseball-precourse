import User from './user/user.js';
import Computer from './computer/computer.js';

export default class BaseballGame {
    constructor() {
        this.user = new User();
        this.computer = new Computer();
        this.inputForm = document.getElementById('input-form');
    }

    init() {
        this.inputForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const userInputVal = this.user.getUserInputValue();

            // 유저 입력값이 유효하지 않을 때
            if (!this.user.checkInputValid(userInputVal)) return;

            this.play(this.computer.getAnswer(), userInputVal);
        });
    }

    /**
     * @param {string} computerInputNumbers 컴퓨터 값
     * @param {string} userInputNumbers 유저 입력값
     * @brief 유저 입력값이 컴퓨터 값과 얼마나 매칭되는지 string form 리턴
     * @return {string}
     */
    play(computerInputNumbers, userInputNumbers) {
        console.log(this.computer.getStrikeBallCnt(computerInputNumbers, userInputNumbers));
    }
}

const baseballGame = new BaseballGame();

baseballGame.init();