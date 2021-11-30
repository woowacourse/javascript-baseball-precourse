import { pickRandomNumbers } from './utils/number-picker.js';
import { isValid } from './utils/input-validator.js'

const $userInput = document.getElementById('user-input');
const $submitBtn = document.getElementById('submit');
const $resultDiv = document.getElementById('result');

export default class BaseballGame {
    constructor() {
        this.computerInputNumbers = pickRandomNumbers(3);
        this.userInputNumbers = '';

        this.bindSubmitEvent();
    }

    bindSubmitEvent() {
        $submitBtn.addEventListener('click', event => {
            event.preventDefault();
            console.log(!isValid($userInput.value));
        });
    }
}

new BaseballGame();