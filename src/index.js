import Computer from './computer.js';
import User from './user.js';
import { GAME_RULE, NOTHING, RESTART_BUTTON_TEXT, RESTART_TEXT, SUCCESS } from './constants.js';
import { calcResult } from './calcResult.js';

export default class BaseballGame {
    constructor() {
        this.computer = new Computer();
        this.user = new User();
        this.$userInputForm = document.getElementById('user-input-form');
        this.$resultArea = document.getElementById('result');
        this.addEventListeners();
    }

    addEventListeners() {
        this.addEventSubmitForm();
    }

    addEventSubmitForm() {
        this.$userInputForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // 3개가 제대로 들어가있는 경우만 취함
            if (this.user.getUserInputNumbers().length === 3) {
                this.setResult();
            }
        });
    }

    setResult() {
        const result = this.play(this.computer.getAnswer(), this.user.getUserInputNumbers());

        this.$resultArea.textContent = result;
    }

    play(computerInputNumbers, userInputNumbers) {
        const { strike, ball } = calcResult(computerInputNumbers, userInputNumbers);

        let result = '';

        if (strike === GAME_RULE.answerLength) {
            result = SUCCESS;
        }
        else if (strike === 0 && ball === 0) {
            result = NOTHING;
        }
        else {
            result = `${ball}볼 ${strike}스트라이크`;
        }

        return result;
    }
}

new BaseballGame();