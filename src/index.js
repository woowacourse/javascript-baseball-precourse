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

    userInputAlert(ERROR_CODE) {
        switch (ERROR_CODE) {
            case RESULT_CODE.ERROR_USERINPUT_LENGTH:
                alert("3글자로 입력하여주세요.\n(1~9 숫자, 중복 없는 수 3자리)");
                break;

            case RESULT_CODE.ERROR_USERINPUT_NUMBER_RANGE:
                alert("1에서 9 사이의 숫자만 입력할 수 있습니다.\n(1~9 숫자, 중복 없는 수 3자리)");
                break;

            case RESULT_CODE.ERROR_USERINPUT_UNIQUE_WORD:
                alert("중복된 숫자가 있습니다.\n(1~9 숫자, 중복 없는 수 3자리)");
                break;
        }

        this.userInputView.setFocus();
    }

    isUserInputVaild() {
        this.userInputModel.setValue($("#user-input").value);
        const CHECK_RESULT = this.userInputModel.checkInputValid;

        if (CHECK_RESULT === RESULT_CODE.DONE_USERINPUT_VALID) return true;

        this.userInputAlert(CHECK_RESULT);
        return false;
    }

    onSubmitClick(event) {
        event.preventDefault();

        if (!this.isUserInputVaild()) return false;
        this.play(this.gameManagerModel.computerNumbers, this.userInputModel.toNumberArray);
    }

    play(computerInputNumbers, userInputNumbers) {
        console.log(computerInputNumbers, userInputNumbers);
    }
}

new BaseballGame();
