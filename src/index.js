export default class BaseballGame {
  constructor(app) {
    this._app = app;
    app.onclick = this.onClick.bind(this);
    this.init();
  }

  init() {
    this.isEnd = false;
    this.computerInputNumbers = this.getRandomNumbers();
  }

  start() {
    alert('start');
  }

  restart() {
    alert('restart');
  }

  getRandomNumbers(min = 1, max = 9) {
    const numbers = [];

    while (numbers.length < 3) {
      const randomNumber = Math.floor(Math.random() * (max - min) + min);

      if (numbers.indexOf(randomNumber) === -1) {
        numbers.push(randomNumber);
      }
    }

    return numbers;
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
