import Computer from './Computer.js';
import Validator from './Validator.js';
import {
    ELEMENT_ID_USER_INPUT,
    ELEMENT_ID_RESULT,
    ELEMENT_ID_SUBMIT,
    ELEMENT_ID_GAME_RESTART,
    ALERT_MESSAGE,
    ANSWER_MESSAGE,
    RESTART_MESSAGE,
    RESTART_BUTTON_TEXT,
} from './constant/index.js';

export default class BaseballGame {
    constructor() {
        this.$userInput = document.getElementById(ELEMENT_ID_USER_INPUT);
        this.$result = document.getElementById(ELEMENT_ID_RESULT);
        this.$submit = document.getElementById(ELEMENT_ID_SUBMIT);
        this.computer = null;
        this.validator = new Validator();

        this.initialize();
        this.enrollSubmitOnclickHandler();
    }

    initialize() {
        this.$userInput.value = '';
        this.$result.innerHTML = '';
        this.$userInput.disabled = false;
        this.$submit.disabled = false;
        this.$userInput.focus();
        this.computer = new Computer();
    }
    
    enrollSubmitOnclickHandler() {
        this.$submit.addEventListener('click', (e) => {
            e.preventDefault();
            this.submitUserInput();
        })
    }

    submitUserInput() {
        if (this.validator.checkIsValidInput(this.$userInput.value)) {
            const result = this.play(this.computer.getComputerNumbers(), this.$userInput.value);

            this.displayResult(result);
        } else {
            this.handleException();
        }
    }

    handleException() {
        alert(ALERT_MESSAGE);
        this.$userInput.focus();
    }

    play(computerInputNumbers, userInputNumbers) {
        const [ cntBall, cntStrike ] = this.determineResult(computerInputNumbers, userInputNumbers);
        
        const result = this.convertCntToStringResult(cntBall, cntStrike);
        
        return result;
    }

    determineResult(computerInputNumbers, userInputNumbers) {
        const computerNumArr = computerInputNumbers.split('');
        let cntBall = 0;
        let cntStrike = 0;

        userInputNumbers.split('').forEach((value, index) => {
            const pos = computerNumArr.indexOf(value);
            if (pos === index) {
                cntStrike += 1
            } else if (pos !== -1) {
                cntBall += 1
            }
        });

        return [ cntBall, cntStrike ];
    }

    convertCntToStringResult(cntBall, cntStrike) {
        let result = '';

        if (cntStrike === 3) {
            result = '정답';
        } else if (cntBall === 0 && cntStrike === 0) {
            result = '낫싱';
        } else if (cntBall > 0 && cntStrike > 0) {
            result = `${cntBall}볼 ${cntStrike}스트라이크`;
        }  else if (cntBall > 0) {
            result = `${cntBall}볼`;
        } else if (cntStrike > 0) {
            result = `${cntStrike}스트라이크`;
        }
        return result;
    }

    displayResult(result) {
        if (result === '정답') {
            this.quitGame();
            this.generateCorrectResult();
        } else {
            this.$result.innerText = result;
        }
    }

    generateCorrectResult() {
        this.$result.innerHTML = `<h3>${ANSWER_MESSAGE}</h3><span>${RESTART_MESSAGE}<button id=${ELEMENT_ID_GAME_RESTART}>${RESTART_BUTTON_TEXT}</button></span>`;

        const $gameRestartButton = document.getElementById(ELEMENT_ID_GAME_RESTART);
        $gameRestartButton.addEventListener('click', () => {
            this.initialize();
        })
    }
    
    quitGame() {
        this.$submit.disabled = true;
        this.$userInput.disabled = true;
    }
}

new BaseballGame();