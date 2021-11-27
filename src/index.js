import Computer from './Computer.js';
import {
    ELEMENT_ID_USER_INPUT,
    ELEMENT_ID_RESULT,
} from './constant/index.js';

export default class BaseballGame {
    constructor() {
        this.$userInput = document.getElementById(ELEMENT_ID_USER_INPUT);
        this.$result = document.getElementById(ELEMENT_ID_RESULT);
        this.computer = null;

        this.initialize();
    }

    initialize() {
        this.$userInput.value = '';
        this.$result.innerHTML = '';
        this.$userInput.focus();
        this.computer = new Computer();
    }

    play(computerInputNumbers, userInputNumbers) {
        return "결과 값 String";
    }
}

new BaseballGame();