import { $, createElement, combineElement } from "../utils.js";
import { RESULT_CODE, RESULT_TEXT, ALERT_MESSAGE } from "../data/constants.js";
import { $result, $userInput, $submit } from "../data/elements.js";

export function errorMessage(erroCode) {
    let alertText = "";
    if (erroCode === RESULT_CODE.ERROR_USERINPUT_LENGTH) alertText = ALERT_MESSAGE.ERROR_USERINPUT_LENGTH;
    else if (erroCode === RESULT_CODE.ERROR_USERINPUT_UNIQUE_WORD) alertText = ALERT_MESSAGE.ERROR_USERINPUT_UNIQUE_WORD;
    else if (erroCode === RESULT_CODE.ERROR_USERINPUT_NUMBER_RANGE) alertText = ALERT_MESSAGE.ERROR_USERINPUT_NUMBER_RANGE;

    alert(alertText);
    $userInput.focus();
}

class GameRender {
    constructor() {
        this.init();
    }

    init() {
        $result.style.display = "none";
        $result.innerHTML = "";

        $userInput.value = "";
        $userInput.focus();

        this.setInputDisable(false);
    }

    setInputDisable(isDisabled) {
        if (isDisabled === true) {
            $userInput.setAttribute("disabled", "");
            $submit.setAttribute("disabled", "");
        } else if (isDisabled === false) {
            $userInput.removeAttribute("disabled");
            $submit.removeAttribute("disabled");
        }
    }

    setContent($content) {
        $result.innerHTML = "";
        $result.append($content);
        $result.style.display = "block";
    }

    gameHint(resultText) {
        const $text = createElement("P", resultText);
        this.setContent($text);

        $userInput.focus();
    }

    gameRetry(callback) {
        const $correctText = createElement("H4", RESULT_TEXT.GAME_OVER_HEADER);
        const $retryWrap = createElement("DIV", RESULT_TEXT.GAME_OVER_CONTENT);

        const $retryButton = createElement("BUTTON", RESULT_TEXT.GAME_OVER_BUTTON);
        $retryButton.id = "game-restart-button";
        $retryWrap.append($retryButton);

        const $fragment = combineElement([$correctText, $retryWrap]);
        this.setContent($fragment);
        this.setInputDisable(true);

        callback($retryButton);
    }
}

export const gameRender = new GameRender();
