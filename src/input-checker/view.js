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
