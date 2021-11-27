export default class GameView {
  constructor({ $resultSection, $userInput, $submitButton }) {
    this.$resultSection = $resultSection;
    this.$userInput = $userInput;
    this.$submitButton = $submitButton;
  }

  renderResult(result) {
    this.$resultSection.innerHTML = result;
  }

  renderVictory(answer, victoryNoticeBox) {
    this.$userInput.placeholder = answer;
    this.clearResult();
    this.$resultSection.append(victoryNoticeBox);
  }

  alertWrongInput(alertMessage) {
    alert(alertMessage);
  }

  clearResult() {
    this.$resultSection.innerHTML = '';
  }

  clearInputBox() {
    this.$userInput.value = '';
  }

  activateForm() {
    this.$userInput.removeAttribute('disabled');
    this.$submitButton.removeAttribute('disabled');
    this.$userInput.placeholder = '';
    this.$userInput.focus();
  }

  deactivateForm() {
    this.$userInput.setAttribute('disabled', true);
    this.$submitButton.setAttribute('disabled', true);
  }
}
