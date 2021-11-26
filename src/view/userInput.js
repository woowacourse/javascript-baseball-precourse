export default class userInputView {
    constructor($userInput, $submitButton) {
        this.$userInput = $userInput;
        this.$submitButton = $submitButton;

        console.log(this.$userInput, this.$submitButton);

        this.init();
    }

    init() {
        this.$userInput.value = "";
        this.setDisable(false);
    }

    setDisable(isDisable) {
        if (isDisable === true) {
            this.$userInput.setAttribute("disabled", "");
            this.$submitButton.setAttribute("disabled", "");
        } else if (isDisable === false) {
            this.$userInput.removeAttribute("disabled");
            this.$submitButton.removeAttribute("disabled");
        }
    }

    setFocus() {
        this.$userInput.focus();
    }
}
