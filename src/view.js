export default class GameView {
  constructor(model) {
    this.model = model;
    this.resultSection = document.getElementById('result');
  }

  renderResult(result) {
    this.resultSection.innerHTML = result;
  }

  renderVictory(result) {
    this.resultSection.append(result);
  }

  alertWrongInput(alertMessage) {
    alert(alertMessage);
    this.clearResult();
  }

  clearResult() {
    this.resultSection.innerHTML = '';
    document.getElementById('user-input').focus();
  }
}
