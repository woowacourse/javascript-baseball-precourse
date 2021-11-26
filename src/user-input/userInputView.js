import { RESULT_CODE, ALERT_MESSAGE } from "../constants.js";

export default class userInputView {
    constructor($userInput, $submitButton) {
        this.$userInput = $userInput;
        this.$submitButton = $submitButton;

        this.init();
    }

    init() {
        this.$userInput.value = "";
        this.setDisable(false);
    }

    showErrorAlert(ERROR_CODE) {
        switch (ERROR_CODE) {
            case RESULT_CODE.ERROR_USERINPUT_LENGTH:
                alert(ALERT_MESSAGE.ERROR_USERINPUT_LENGTH);
                break;

            case RESULT_CODE.ERROR_USERINPUT_NUMBER_RANGE:
                alert(ALERT_MESSAGE.ERROR_USERINPUT_NUMBER_RANGE);
                break;

            case RESULT_CODE.ERROR_USERINPUT_UNIQUE_WORD:
                alert(ALERT_MESSAGE.ERROR_USERINPUT_UNIQUE_WORD);
                break;
        }
    }

    setDisable(isDisabled) {
        if (isDisabled === true) {
            this.$userInput.setAttribute("disabled", "");
            this.$submitButton.setAttribute("disabled", "");
        } else if (isDisabled === false) {
            this.$userInput.removeAttribute("disabled");
            this.$submitButton.removeAttribute("disabled");
        }
    }

    setFocus() {
        this.$userInput.focus();
    }
}
