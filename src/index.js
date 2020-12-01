export default class BaseballGame {
  constructor(app) {
    this._app = app;
    app.onclick = this.onClick.bind(this);
  }

  start() {
    alert('start');
  }

  restart() {
    alert('restart');
  }

  onClick(event) {
    const targetId = event.target.id;

    if (targetId === 'submit') {
      this.start();
    }

    if (targetId === 'game-restart-button') {
      this.restart();
    }
  }
}

new BaseballGame(document.getElementById('app'));
