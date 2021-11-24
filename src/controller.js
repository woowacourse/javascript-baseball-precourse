export default class GameController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.computerInputNumbers;
    this.userInputNumbers;
  }

  app() {
    document
      .getElementById('submit')
      .addEventListener('click', this.submitHandler.bind(this));
    this.init();
  }

  init() {
    this.view.clearResult();
    this.makeNewAnswer();
  }

  submitHandler(e) {
    e.preventDefault();
    this.getInput();
    if (this.checkWrongInput() === true) {
      if (this.computerInputNumbers === this.userInputNumbers) {
        this.createVictoryNotice();
        return true;
      }
      this.view.renderResult(this.play());
    }
  }

  createVictoryNotice() {
    const container = document.createElement('div');
    const victoryText = document.createElement('h4');
    victoryText.innerText = '🎉정답을 맞추셨습니다!🎉';
    const askText = document.createElement('span');
    askText.innerText = '게임을 새로 시작하시겠습니까? ';
    const restartButton = document.createElement('button');
    restartButton.innerText = '게임 재시작';
    restartButton.id = 'game-restart-button';
    restartButton.addEventListener('click', this.init.bind(this));
    container.appendChild(victoryText);
    container.appendChild(askText);
    container.appendChild(restartButton);
    this.view.renderVictory(container);
  }

  makeNewAnswer() {
    let value = '';
    while (value.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!value.includes(randomNumber)) {
        value += randomNumber;
      }
    }
    this.computerInputNumbers = value;
    console.log(value);
  }

  getInput() {
    const userInputNumbers = document.getElementById('user-input');
    const { value } = userInputNumbers;
    userInputNumbers.value = '';
    this.userInputNumbers = value;
  }

  checkWrongInput() {
    if (
      isNaN(this.userInputNumbers) ||
      this.userInputNumbers.length !== 3 ||
      this.userInputNumbers.includes('0')
    ) {
      this.view.alertWrongInput(
        '입력된 값이 3개의 숫자가 아니거나 0이 포함됐습니다. 중복없이 1~9 사이의 3개의 수를 입력해주세요'
      );
      return false;
    }

    for (let i = 0; i < 3; i++) {
      for (let j = i + 1; j < 3; j++) {
        if (this.userInputNumbers[i] === this.userInputNumbers[j]) {
          this.view.alertWrongInput(
            '입력된 값에 중복된 숫자가 있습니다. 중복없이 3개의 수를 입력해주세요'
          );
          return false;
        }
      }
    }
    return true;
  }

  play() {
    let valueOfStrike = 0;
    let valueOfBall = 0;
    for (let i = 0; i < 3; i++) {
      if (this.computerInputNumbers[i] === this.userInputNumbers[i]) {
        valueOfStrike++;
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.computerInputNumbers[i] === this.userInputNumbers[j]) {
          valueOfBall++;
        }
      }
    }

    valueOfBall -= valueOfStrike;

    return valueOfStrike === 0 && valueOfBall === 0
      ? '낫싱'
      : valueOfStrike === 0 && valueOfBall !== 0
      ? `${valueOfBall}볼`
      : valueOfStrike !== 0 && valueOfBall === 0
      ? `${valueOfStrike}스트라이크`
      : `${valueOfBall}볼 ${valueOfStrike}스트라이크`;
  }
}
