export default class GameController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  app() {
    document
      .getElementById('submit')
      .addEventListener('click', this.submitHandler.bind(this));
    this.init();
  }

  init() {
    this.view.clearResult();
    this.view.activateForm();
    this.makeNewAnswer();
  }

  play() {
    let valueOfStrike = 0;
    let valueOfBall = 0;
    const computerInputNumbers = this.model.getComputerInputNumbers();
    const userInputNumbers = this.model.getUserInputNumbers();

    for (let i = 0; i < 3; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        valueOfStrike++;
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (computerInputNumbers[i] === userInputNumbers[j]) {
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

  getSubmitFromForm() {
    const { value } = document.getElementById('user-input');
    this.model.setUserInputNumbers(value);
    this.view.clearInputBox();
  }

  makeNewAnswer() {
    let value = '';
    while (value.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!value.includes(randomNumber)) {
        value += randomNumber;
      }
    }
    console.log(value);
    this.model.setComputerInputNumbers(value);
  }

  submitHandler(e) {
    e.preventDefault();
    this.getSubmitFromForm();
    if (this.checkWrongInput() === true) {
      if (
        this.model.getComputerInputNumbers() ===
        this.model.getUserInputNumbers()
      ) {
        this.sendVictoryNotice();
        return true;
      }
      this.view.renderResult(this.play());
    }
  }

  sendVictoryNotice() {
    this.view.deactivateForm();
    this.view.renderVictory(
      this.model.getComputerInputNumbers(),
      this.getVictoryNoticeBox()
    );
  }

  checkWrongInput() {
    const userInputNumbers = this.model.getUserInputNumbers();

    if (
      isNaN(userInputNumbers) ||
      userInputNumbers.length !== 3 ||
      userInputNumbers.includes('0')
    ) {
      this.view.alertWrongInput(
        '입력된 값이 3개의 숫자가 아니거나 0이 포함됐습니다. 중복없이 1~9 사이의 3개의 수를 입력해주세요'
      );
      this.view.clearResult();
      return false;
    }

    for (let i = 0; i < 3; i++) {
      for (let j = i + 1; j < 3; j++) {
        if (userInputNumbers[i] === userInputNumbers[j]) {
          this.view.alertWrongInput(
            '입력된 값에 중복된 숫자가 있습니다. 중복없이 3개의 수를 입력해주세요'
          );
          return false;
        }
      }
    }
    return true;
  }

  getVictoryNoticeBox() {
    const $victoryNoticeBox = document.createElement('div');
    const $victoryText = document.createElement('h4');
    $victoryText.innerText = '🎉정답을 맞추셨습니다!🎉';
    const $questionText = document.createElement('span');
    $questionText.innerText = '게임을 새로 시작하시겠습니까? ';
    const $restartButton = document.createElement('button');
    $restartButton.innerText = '게임 재시작';
    $restartButton.id = 'game-restart-button';
    $restartButton.addEventListener('click', this.init.bind(this));
    $victoryNoticeBox.appendChild($victoryText);
    $victoryNoticeBox.appendChild($questionText);
    $victoryNoticeBox.appendChild($restartButton);
    return $victoryNoticeBox;
  }
}
