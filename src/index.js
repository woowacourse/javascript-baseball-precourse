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

            // 유저 입력값이 유효하지 않을 때
            if (!this.user.checkInputValid()) return;

            
        });
    }

    play(computerInputNumbers, userInputNumbers) {
    }
}

const baseballGame = new BaseballGame();

baseballGame.init();