import { pickRandomNumbers } from './utils/number-picker.js';
import { removeSpace, isInvalid } from './utils/input-validator.js';
import { getBallStrikeCount } from './utils/ball-counter.js';

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
        $submitBtn.addEventListener('click', this.submitEvent.bind(this));
    }

    submitEvent(event) {
        event.preventDefault();
        const inputValue = removeSpace($userInput.value);
        
        if (isInvalid(inputValue, 3)) {
            $userInput.value = '';
            return;
        }

        this.userInputNumbers = inputValue;
        this.play(this.computerInputNumbers, this.userInputNumbers);
    }

    play(computerInputNumbers, userInputNumbers) {
        console.log(computerInputNumbers);
        console.log(userInputNumbers);
        
        const [ball, strike] = getBallStrikeCount(computerInputNumbers, userInputNumbers);
        console.log(`${ball}볼 ${strike}스트라이크`);
    }
}

new BaseballGame();