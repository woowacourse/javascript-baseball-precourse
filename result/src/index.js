export default class BaseballGame {
  constructor() {
    this.runningGame = true;
    this.answer = this._makeOnAnswer();
    this._strike = 0;
    this._ball = 0;
  }

  _makeOnAnswer() {
    const maxNumberArray = this._createMaxNumberLengthArray();
    let answer = '';
    for (let i = 1; i <= 3; i++) {
      const selectedNumber = maxNumberArray.splice(
        this._selectRandomNumber(maxNumberArray.length),
        1,
      );
      answer += selectedNumber;
    }

    return answer;
  }

  _createMaxNumberLengthArray() {
    const MAX_NUMBER = 9;
    const maxNumberArray = Array(MAX_NUMBER)
      .fill()
      .map((v, index) => index + 1);

    return maxNumberArray;
  }

  _selectRandomNumber(length) {
    const randomNumber = Math.floor(Math.random() * length);

    return randomNumber;
  }

  isInputRight(value) {
    if (value.match(/0/)) {
      return alert('1~9까지의 숫자만 입력해주세요.');
    }
    if (value.match(/\D/)) {
      return alert('숫자가 아닙니다.');
    }
    if (value.length !== new Set(value).size) {
      return alert('숫자가 중복됩니다.');
    }
    if (value.length !== 3) {
      return alert('3자리의 숫자를 입력해주세요.');
    }

    return true;
  }

  play(computerInputNumbers, userInputNumbers) {
    this._initValue();
    this._compareInput(computerInputNumbers, userInputNumbers);

    if (!this._strike && !this._ball) {
      return '낫싱';
    }
    if (!this._strike) {
      return `${this._ball}볼`;
    }
    if (!this._ball) {
      return `${this._strike}스트라이크`;
    }

    return `${this._ball}볼 ${this._strike}스트라이크`;
  }

  _initValue() {
    this._strike = 0;
    this._ball = 0;
  }

  _compareInput(answer, userInput) {
    for (let userIndex = 0; userIndex < 3; userIndex++) {
      const answerNumberIndex = answer.indexOf(userInput[userIndex]);
      if (answerNumberIndex >= 0) {
        answerNumberIndex === userIndex ? this._strike++ : this._ball++;
      }
    }
  }

  showResultOnScreen(resultText) {
    const resultDiv = document.body.querySelector('#result');
    resultDiv.innerText = resultText;

    if (this._strike === 3) {
      return this._gameFinish();
    }
  }

  _gameFinish() {
    const resultDiv = document.body.querySelector('#result');

    resultDiv.innerHTML = `<h3>🎉정답을 맞추셨습니다!🎉</h3> 
    <div id=restart-text>게임을 새로 시작하시겠습니까? </div>`;
    this.runningGame = false;

    return this._createReStartButton();
  }

  _createReStartButton() {
    const restartDiv = document.body.querySelector('#restart-text');
    const reStartButton = document.createElement('button');
    reStartButton.id = 'game-restart-button';
    reStartButton.innerText = '게임 재시작';
    restartDiv.appendChild(reStartButton);

    return reStartButton.addEventListener(
      'click',
      this._onGameReStart.bind(this),
    );
  }

  _onGameReStart() {
    const userInput = document.body.querySelector('#user-input');
    const resultDiv = document.body.querySelector('#result');

    while (resultDiv.firstChild) {
      resultDiv.removeChild(resultDiv.firstChild);
    }

    userInput.value = '';
    this.runningGame = true;

    return (this.answer = this._makeOnAnswer());
  }
}
