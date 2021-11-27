import { $, createElement, combineElement } from "./utils.js";
import { RESULT_CODE, RESULT_TEXT, ALERT_MESSAGE } from "./constants.js";

export function errorMessage(erroCode) {
    let alertText = "";
    if (erroCode === RESULT_CODE.ERROR_USERINPUT_LENGTH) alertText = ALERT_MESSAGE.ERROR_USERINPUT_LENGTH;
    else if (erroCode === RESULT_CODE.ERROR_USERINPUT_UNIQUE_WORD) alertText = ALERT_MESSAGE.ERROR_USERINPUT_UNIQUE_WORD;
    else if (erroCode === RESULT_CODE.ERROR_USERINPUT_NUMBER_RANGE) alertText = ALERT_MESSAGE.ERROR_USERINPUT_NUMBER_RANGE;

    alert(alertText);
}

class ResultRender {
    constructor() {
        this.init();
    }

    init() {
        this.$result = $("#result");
        this.$result.style.display = "none";
    }

    setContent($content) {
        const $result = this.result;

        $result.innerHTML = "";
        $result.append($content);
        $result.style.display = "block";
    }

    gameHint(resultText) {
        const $text = createElement("P", resultText);
        this.setContent($text);
    }

    gameRetry() {
        const $correctText = createElement("H4", RESULT_TEXT.GAME_OVER_HEADER);
        const $retryWrap = createElement("DIV", RESULT_TEXT.GAME_OVER_CONTENT);

        const $retryButton = createElement("BUTTON", RESULT_TEXT.GAME_OVER_BUTTON);
        $retryButton.id = "game-restart-button";
        $retryWrap.append($retryButton);

        const $fragment = combineElement([$correctText, $retryWrap]);
        this.setContent($fragment);
    }
}

export const resultRender = new ResultRender();
