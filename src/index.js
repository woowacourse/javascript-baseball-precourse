//import { getComputerNumber } from './computer.js'
import {
    $checkButton, $inputElement, $resultElement, answerDocument
} from './constants/index.js';
import { countResult, errorCheck, getComputerNumbers, getHint } from './gameProcess.js';

class BaseballGame {
    constructor() {
        this.init();
        this.eventRegister();
    }

    eventRegister() {
        $checkButton.addEventListener('click', (ev) => this.checkAnswer(ev));
        $resultElement.addEventListener('click', ({target}) => {
            if(!target.matches('#game-restart-button')) return;
            this.init();
        })
    };

    setResultElementText(text) { $resultElement.innerHTML = text; }

    gameClear() {
        this.setResultElementText(answerDocument);
        this.gameExit = true;
    }

    play(computerInputNumbers, userInputNumbers) {
        const { ball, strike } = countResult(userInputNumbers, computerInputNumbers);
        return getHint(ball, strike);
    };

    checkAnswer(ev) {
        ev.preventDefault(); ev.stopPropagation();

        if(this.gameExit) return;

        const errorText = errorCheck(this.input);
        if(errorText) alert(errorText);
        else if(this.input === this.answer) this.gameClear();
        else this.setResultElementText(this.play(this.answer, this.input));
    }
    init() {
        this.answer = getComputerNumbers();
        this.input = '';
        this.gameExit = false;

        this.setResultElementText(this.input);
        $inputElement.value = '';
    }

}

export default new BaseballGame();
