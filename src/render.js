import { $, createElement, combineElement } from "./utils.js";
import { RESULT_CODE, RESULT_TEXT, ALERT_MESSAGE } from "./constants.js";

const $result = $("#result");

export function errorMessage(erroCode) {
    let alertText = "";
    if (erroCode === RESULT_CODE.ERROR_USERINPUT_LENGTH) alertText = ALERT_MESSAGE.ERROR_USERINPUT_LENGTH;
    else if (erroCode === RESULT_CODE.ERROR_USERINPUT_UNIQUE_WORD) alertText = ALERT_MESSAGE.ERROR_USERINPUT_UNIQUE_WORD;
    else if (erroCode === RESULT_CODE.ERROR_USERINPUT_NUMBER_RANGE) alertText = ALERT_MESSAGE.ERROR_USERINPUT_NUMBER_RANGE;

    alert(alertText);
}

class ResultRender {
    constructor() {
        $result.style.display = "none";
    }

    gameHint(resultText) {
        const $text = createElement("P", resultText);

        $result.innerText = "";
        $result.append($text);
        $result.style.display = "block";
    }

    gameRetry() {
        const $correctText = createElement("H4", RESULT_TEXT.GAME_OVER_HEADER);
        const $retryWrap = createElement("DIV", RESULT_TEXT.GAME_OVER_CONTENT);

        const $retryButton = createElement("BUTTON", RESULT_TEXT.GAME_OVER_BUTTON);
        $retryButton.id = "game-restart-button";
        $retryWrap.append($retryButton);

        $result.innerText = "";
        $result.append(combineElement([$correctText, $retryWrap]));
        $result.style.display = "block";
    }
}

export const resultRender = new ResultRender();
