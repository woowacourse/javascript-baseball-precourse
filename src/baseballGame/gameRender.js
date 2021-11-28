import { $, createElement, combineElement } from "../utils.js";
import { RESULT_CODE, RESULT_TEXT, ALERT_MESSAGE } from "../data/constants.js";
import { $result, $userInput, $submit } from "../data/elements.js";

export function errorMessage(resultCode) {
    switch (resultCode) {
        case RESULT_CODE.ERROR_USERINPUT_LENGTH:
            alert(ALERT_MESSAGE.USERINPUT_LENGTH);
            break;
        case RESULT_CODE.ERROR_USERINPUT_UNIQUE_WORD:
            alert(ALERT_MESSAGE.USERINPUT_UNIQUE_WORD);
            break;
        case RESULT_CODE.ERROR_USERINPUT_NUMBER_RANGE:
            alert(ALERT_MESSAGE.USERINPUT_NUMBER_RANGE);
            break;
    }

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

        this.setFormDisable(false);
    }

    setFormDisable(isDisabled) {
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
        const $restartWrap = createElement("DIV", RESULT_TEXT.GAME_OVER_CONTENT);

        const $restartButton = createElement("BUTTON", RESULT_TEXT.GAME_OVER_BUTTON);
        $restartButton.id = "game-restart-button";
        $restartWrap.append($restartButton);

        const $fragment = combineElement([$correctText, $restartWrap]);
        this.setContent($fragment);
        this.setFormDisable(true);

        if (typeof callback === "function") callback($restartButton);
    }
}

export const gameRender = new GameRender();
