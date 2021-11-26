import { combineElement, createElement } from "../utils.js";
import { RESULT_TEXT } from "../constants.js";

function getGameHintText(ball, strike) {
    if (ball === 0 && strike === 0) return RESULT_TEXT.GAME_HINT_NOTHING;

    const textJoinArray = [];
    if (ball > 0) textJoinArray.push(ball + RESULT_TEXT.GAME_HINT_BALL);
    if (strike > 0) textJoinArray.push(strike + RESULT_TEXT.GAME_HINT_STRIKE);

    return textJoinArray.join(" ");
}

export default class GameManagerView {
    constructor($resultWrap) {
        this.$result = $resultWrap;

        this.init();
    }

    init() {
        this.setVisible(false);
    }

    setVisible(isVisible) {
        if (isVisible === true) this.$result.style.display = "block";
        else if (isVisible === false) this.$result.style.display = "none";
    }

    renderGameHint(gameResult) {
        this.$result.innerText = getGameHintText(gameResult.ball, gameResult.strike);
        this.setVisible(true);
    }

    renderGameRetry() {
        const $correctText = createElement("H4", RESULT_TEXT.GAME_OVER_HEADER);

        const $retryWrap = createElement("DIV", RESULT_TEXT.GAME_OVER_CONTENT);
        const $retryButton = createElement("BUTTON", RESULT_TEXT.GAME_OVER_BUTTON);

        $retryButton.id = "game-restart-button";
        $retryWrap.append($retryButton);

        this.$result.innerText = "";
        this.$result.append(combineElement([$correctText, $retryWrap]));
        this.setVisible(true);
    }
}
