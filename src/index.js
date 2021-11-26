import UserInputModel from "./user-input/userInputModel.js";
import UserInputView from "./user-input/userInputView.js";

import GameManagerModel from "./game-manager/gameManagerModel.js";
import GameManagerView from "./game-manager/gameManagerView.js";

import { RESULT_CODE } from "./constants.js";
import { $ } from "./utils.js";

export default class BaseballGame {
    constructor() {
        const $sumbitButton = $("#submit");

        this.gameManagerModel = new GameManagerModel();
        this.gameManagerView = new GameManagerView($("#result"));

        this.userInputModel = new UserInputModel();
        this.userInputView = new UserInputView($("#user-input"), $sumbitButton);

        $sumbitButton.addEventListener("click", this.onSubmitClick.bind(this));
    }

    isUserInputVaild() {
        this.userInputModel.setValue($("#user-input").value);
        const CHECK_RESULT = this.userInputModel.checkInputValid;

        if (CHECK_RESULT === RESULT_CODE.DONE_USERINPUT_VALID) return true;

        this.userInputView.showErrorAlert(CHECK_RESULT);
        this.userInputView.setFocus();
        return false;
    }

    onSubmitClick(event) {
        event.preventDefault();
        if (!this.isUserInputVaild()) return false;
        const userNumbers = this.userInputModel.toNumberArray;
        const gameResult = this.gameManagerModel.getGameHint(userNumbers);

        const isGameOver = this.gameManagerModel.isGameOver(gameResult);
        if (isGameOver === false) {
            this.gameManagerView.renderGameHint(gameResult);
            return;
        }

        this.gameManagerView.renderGameRetry();
        this.userInputView.setDisable(true);

        $("#game-restart-button").addEventListener("click", this.onRetryClick.bind(this));
    }

    onRetryClick(event) {
        this.userInputView.init();

        this.gameManagerView.init();
        this.gameManagerModel.init();
    }
}

new BaseballGame();
