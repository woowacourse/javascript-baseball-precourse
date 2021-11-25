import Computer from './computer.js';
import User from './user.js';
import { GAME_RULE, RESULT_TEXT, RESTART_TEXT } from './constants.js';
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

        if (result === RESULT_TEXT.success) {
            this.showRestartArea();

            // 재시작 버튼을 누르기 전까지는 input을 건드릴 수 없음
            document.getElementById('user-input').readOnly = true;
        }
    }

    showRestartArea() {
        const { text, buttonText } = RESTART_TEXT;

        const restartText = document.createTextNode(text);
            
        const restartButton = document.createElement('button');
        restartButton.innerHTML = buttonText;
        restartButton.setAttribute('id', 'game-restart-button');
        restartButton.addEventListener('click', () => {
            this.restartGame();
        });

        this.$resultArea.appendChild(document.createElement('br'));
        this.$resultArea.appendChild(restartText);
        this.$resultArea.appendChild(restartButton);
    }

    restartGame() {
        // user-input 초기화
        const $userInput = document.getElementById('user-input');

        $userInput.value = null;
        $userInput.readOnly = false;
        this.user.setUserInputNumbers([]);
        
        // result 초기화
        this.$resultArea.innerHTML = '';
        
        // 새로운 번호 생성
        this.computer = new Computer();
    }

    play(computerInputNumbers, userInputNumbers) {
        const { strikeCnt, ballCnt } = calcResult(computerInputNumbers, userInputNumbers);
        const { ball, strike, nothing, success } = RESULT_TEXT;

        let result = '';

        if (strikeCnt === GAME_RULE.answerLength) {
            result = success;
        }
        else if (strikeCnt === 0 && ballCnt === 0) {
            result = nothing;
        }
        else {
            result = `${ballCnt}${ball} ${strikeCnt}${strike}`;
        }

        return result;
    }
}

new BaseballGame();