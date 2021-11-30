import { pickRandomNumbers } from './utils/number-picker.js';
import { removeSpace, isInvalid } from './utils/input-validator.js'

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
            const inputValue = removeSpace($userInput.value);
            
            if (isInvalid(inputValue, 3)) {
                $userInput.value = '';
                return;
            }

            this.userInputNumbers = inputValue;
        });
    }
}

new BaseballGame();