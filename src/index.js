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
        $submitBtn.addEventListener('click', event => {
            event.preventDefault();
            const inputValue = removeSpace($userInput.value);
            const error = isInvalid(inputValue, 3);
            
            if (error) {
                $userInput.value = '';
                return alert(error);
            }
    
            this.userInputNumbers = inputValue;
            const gameResult = this.play(this.computerInputNumbers, this.userInputNumbers);
            this.render(gameResult);
        });
    }

    play(computerInputNumbers, userInputNumbers) {
        console.log(computerInputNumbers);
        console.log(userInputNumbers);
        
        const [ball, strike] = getBallStrikeCount(computerInputNumbers, userInputNumbers);
        const gameResult = this.getGameResult(ball, strike);
        console.log(gameResult);
        return gameResult;
    }

    getGameResult(ballCount, strikeCount) {
        if (strikeCount === 3) {
            return `${strikeCount}스트라이크`;
        }
        else if (strikeCount + ballCount === 0) {
            return '낫싱';
        }
        
        return `${ballCount}볼 ${strikeCount}스트라이크`;
    }

    render(text) {
        let resultText = `<p>${text}</p>`;
        $resultDiv.innerHTML = resultText;
    }
}

new BaseballGame();