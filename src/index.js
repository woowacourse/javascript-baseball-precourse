import { pickRandomNumbers } from './utils/number-picker.js';

const $userInput = document.getElementById("user-input");
const $submitBtn = document.getElementById("submit");
const $resultDiv = document.getElementById("result");

export default class BaseballGame {
    constructor() {
        this.computerInputNumbers = pickRandomNumbers(3);
        this.userInputNumbers = null;

        this.bindSubmitEvent();
    }

    bindSubmitEvent() {
        $submitBtn.addEventListener('click', event => {
            event.preventDefault();
            this.userInputNumbers = $userInput.value;
            console.log(this.userInputNumbers);
        });
    }
}

new BaseballGame();