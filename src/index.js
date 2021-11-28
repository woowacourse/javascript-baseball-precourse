import {
    $checkButton, $inputElement, $resultElement, answerDocument
} from './constants/index.js';
import { checkError, countResult, getComputerNumbers, getHint } from './gameProcess.js';

class BaseballGame {
    constructor() {
        this.init();
        this.eventRegister();
    }

    eventRegister() {
        $checkButton.addEventListener('click', (ev) => { this.checkAnswer(ev); });
        $inputElement.addEventListener('change', ({target}) => { this.onTextChange(target); });
        $resultElement.addEventListener('click', ({target}) => {
            if(!target.matches('#game-restart-button')) return;
            this.init();
        });
    };

    play(computerInputNumbers, userInputNumbers) {
        const { ball, strike } = countResult(userInputNumbers, computerInputNumbers);
        return getHint(ball, strike);
    }
    setResultElementText(text) { $resultElement.innerHTML = text; }
    onTextChange(target) { this.input = target.value; }

    init() {
        this.answer = getComputerNumbers();
        this.input = '';
        this.isExit = false;

        this.setResultElementText(this.input);
        $inputElement.value = '';
    }

    gameClear() {
        this.setResultElementText(answerDocument);
        this.isExit = true;
    }

    checkAnswer(ev) {
        ev.preventDefault(); ev.stopPropagation();

        if(this.isExit) return;

        const errorText = checkError(this.input);
        if(errorText) { alert(errorText); }
        else if(this.input === this.answer) { this.gameClear(); }
        else { this.setResultElementText(this.play(this.answer, this.input)); }
    }
}

export default new BaseballGame();
