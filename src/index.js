import { pickRandomNumbers } from './utils/number-picker.js';
import { removeSpace, isInvalid } from './utils/input-validator.js';
import { getBallStrikeCount } from './utils/ball-counter.js';
import { GAME_SETTING, RESULT_MESSAGE } from './constant.js';

const $userInput = document.getElementById('user-input');
const $submitBtn = document.getElementById('submit');
const $resultDiv = document.getElementById('result');
let $resetButton = null;

export default class BaseballGame {
    constructor() {
        this.init();
        this.bindSubmitEvent();
    }

    init() {
        this.computerInputNumbers = pickRandomNumbers(GAME_SETTING.SIZE, GAME_SETTING.MIN, GAME_SETTING.MAX);
        this.resetInputs();
    }

    resetInputs() {
        $userInput.value = '';
        this.userInputNumbers = '';
        this.render('');
    }

    bindSubmitEvent() {
        $submitBtn.addEventListener('click', event => {
            event.preventDefault();
            const inputValue = removeSpace($userInput.value);
            const error = isInvalid(inputValue, GAME_SETTING.SIZE);
            
            if (error) {
                this.resetInputs();
                return alert(error);
            }
    
            this.userInputNumbers = inputValue;
            
            const gameResult = this.play(this.computerInputNumbers, this.userInputNumbers);
            this.render(gameResult);
        });
    }

    bindRestartEvent() {
        $resetButton = document.getElementById('game-restart-button');
        $resetButton.addEventListener('click', event => {
            this.init();
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
        if (strikeCount === GAME_SETTING.SIZE) {
            return `${strikeCount}스트라이크`;
        }
        else if (strikeCount + ballCount === 0) {
            return '낫싱';
        }
        
        return `${ballCount}볼 ${strikeCount}스트라이크`;
    }

    render(text) {
        let resultText = `<p>${text}</p>`;
        let isStrike = false;

        if (text === `${GAME_SETTING.SIZE}스트라이크`) {
            isStrike = true;
            resultText = `<p><strong>${RESULT_MESSAGE.WIN}</strong></p>
            <p>${RESULT_MESSAGE.RESTART} <button id="game-restart-button">재시작</button></p>`;
        }

        $resultDiv.innerHTML = resultText;
        
        if (isStrike) {
            this.bindRestartEvent();
        }
    }
}

new BaseballGame();