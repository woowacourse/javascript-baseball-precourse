import { $, createElement, combineElement } from "../utils.js";
import { RESULT_CODE, RESULT_TEXT } from "../data/constants.js";
import { $result, $userInput, $submit } from "../data/elements.js";

export function checkErrorMessage(resultCode) {
    if (resultCode === RESULT_CODE.DONE_USERINPUT_VALID) return false;

    alert(resultCode.description);
    $userInput.focus();

    return true;
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
