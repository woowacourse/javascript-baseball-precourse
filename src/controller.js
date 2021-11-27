import { getStrikeNumber, getBallNumber } from './utilOfPlay.js';

export default class GameController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  static ruleRangeNumber = 3;

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

  play(computerInputNumbers, userInputNumbers) {
    const valueOfStrike = getStrikeNumber(
      GameController.ruleRangeNumber,
      computerInputNumbers,
      userInputNumbers
    );
    const valueOfBall = getBallNumber(
      GameController.ruleRangeNumber,
      computerInputNumbers,
      userInputNumbers,
      valueOfStrike
    );

    if (valueOfStrike === 0 && valueOfBall === 0) {
      return '낫싱';
    }
    if (valueOfStrike === 0 && valueOfBall !== 0) {
      return `${valueOfBall}볼`;
    }
    if (valueOfStrike !== 0 && valueOfBall === 0) {
      return `${valueOfStrike}스트라이크`;
    }
    return `${valueOfBall}볼 ${valueOfStrike}스트라이크`;
  }

  getSubmitFromForm() {
    const { value } = document.getElementById('user-input');
    this.model.setUserInputNumbers(value);
    this.view.clearInputBox();
  }

  makeNewAnswer() {
    let value = '';
    while (value.length < GameController.ruleRangeNumber) {
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
    const computerInputNumbers = this.model.getComputerInputNumbers();
    const userInputNumbers = this.model.getUserInputNumbers();
    if (this.checkWrongInput() === true) {
      if (computerInputNumbers === userInputNumbers) {
        this.sendVictoryNotice();
        return true;
      }
      this.view.renderResult(this.play(computerInputNumbers, userInputNumbers));
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
      userInputNumbers.length !== GameController.ruleRangeNumber ||
      userInputNumbers.includes('0')
    ) {
      this.view.alertWrongInput(
        `입력된 값 '${userInputNumbers}'은 ${GameController.ruleRangeNumber}개의 숫자가 아니거나 0이 포함됐습니다. 중복없이 1~9 사이의 ${GameController.ruleRangeNumber}개의 수를 입력해주세요`
      );
      return false;
    }

    for (let i = 0; i < GameController.ruleRangeNumber; i++) {
      if (this.checkDuplicatedNumbers(i, userInputNumbers) === false) {
        return false;
      }
    }
    return true;
  }

  checkDuplicatedNumbers(i, userInputNumbers) {
    for (let j = i + 1; j < GameController.ruleRangeNumber; j++) {
      if (userInputNumbers[i] === userInputNumbers[j]) {
        this.view.alertWrongInput(
          `입력된 값 ${userInputNumbers}에 중복된 숫자가 있습니다. 중복없이 ${GameController.ruleRangeNumber}개의 수를 입력해주세요.`
        );
        return false;
      }
    }
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
