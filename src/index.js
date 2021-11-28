import Computer from './Computer.js';
import {
    MIN_NUMBER_IN_RANGE,
    MAX_NUMBER_IN_RANGE,
    LENGTH_NUMBERS,
    ELEMENT_ID_USER_INPUT,
    ELEMENT_ID_RESULT,
    ELEMENT_ID_SUBMIT,
    ALERT_MESSAGE,
} from './constant/index.js';

export default class BaseballGame {
    constructor() {
        this.$userInput = document.getElementById(ELEMENT_ID_USER_INPUT);
        this.$result = document.getElementById(ELEMENT_ID_RESULT);
        this.$submit = document.getElementById(ELEMENT_ID_SUBMIT);
        this.computer = null;

        this.initialize();
        this.enrollSubmitOnclickHandler();
    }

    initialize() {
        this.$userInput.value = '';
        this.$result.innerHTML = '';
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
        if (this.checkIsValidInput(this.$userInput.value)) {
            this.play(this.computer.getComputerNumbers(), this.$userInput.value);
        } else {
            this.handleException();
        }
    }

    checkIsValidInput(userInputValue) {
        let isValid = false;

        if (
            this.checkLength(userInputValue)
            && this.checkIsAllValidNumber(userInputValue)
            && this.checkDuplicatedNumber(userInputValue)
        ) {
            isValid = true;
        }

        return isValid;
    }

    checkLength(userInputValue) {
        return userInputValue.length === LENGTH_NUMBERS;
    }

    checkIsAllValidNumber(userInputValue) {
        const isAllNaturalNumber = userInputValue.split('').every((e)=>{
            if (!isNaN(e) && MIN_NUMBER_IN_RANGE <= e && MAX_NUMBER_IN_RANGE >= e) {
                return true;
            } else {
                return false;
            }
        });

        return isAllNaturalNumber;
    }

    checkDuplicatedNumber(userInputNumbers) {
        const { size } = new Set(userInputNumbers.split(''));

        return size === LENGTH_NUMBERS
    }

    handleException() {
        alert(ALERT_MESSAGE);
        this.$userInput.focus();
    }

    play(computerInputNumbers, userInputNumbers) {
        return "결과 값 String";
    }
}

new BaseballGame();