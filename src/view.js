export default class GameView {
  constructor() {
    this.resultSection = document.getElementById('result');
    this.userInput = document.getElementById('user-input');
    this.submitButton = document.getElementById('submit');
  }

  renderResult(result) {
    this.resultSection.innerHTML = result;
  }

  renderVictory(answer, victoryNoticeBox) {
    this.userInput.placeholder = answer;
    this.clearResult();
    this.resultSection.append(victoryNoticeBox);
  }

  alertWrongInput(alertMessage) {
    alert(alertMessage);
    this.clearResult();
  }

  clearResult() {
    this.resultSection.innerHTML = '';
  }

  activateForm() {
    this.userInput.removeAttribute('disabled');
    this.submitButton.removeAttribute('disabled');
    this.userInput.placeholder = '';
    this.userInput.focus();
  }

  deactivateForm() {
    this.userInput.setAttribute('disabled', true);
    this.submitButton.setAttribute('disabled', true);
  }
}
