export default class BaseballGame {
  constructor() {
    this.initGame();
  }

  static _validator = {
    isLen3: input => input.length === 3,
    isNum: input => input == parseInt(input, 10),
    noZero: input => !input.includes(0),
    isUnique: input => new Set(input).size === input.length,
  };

  // 만족하지 않는 validation의 이름을 리턴한다
  static checkInvalid(input) {
    let invalidName = '';
    for (const [name, valid] of Object.entries(BaseballGame._validator)) {
      if (!valid(input)) {
        invalidName = name;
        break;
      }
    }

    return invalidName;
  }

  initGame() {
    this._computerInputNum = this._generateComputerInput();
    this._gotAnswer = false;
  }

  getComputerInputNum() {
    return this._computerInputNum;
  }

  userGotAnswer() {
    return this._gotAnswer;
  }

  play(computerInputNumbers, userInputNumbers) {
    const computerInputStr = computerInputNumbers.toString();
    const userInputStr = userInputNumbers.toString();
    let ballCount = 0;
    let strikeCount = 0;

    for (let i = 0; i < userInputStr.length; i++) {
      const idx = computerInputStr.indexOf(userInputStr[i]);
      if (idx >= 0) {
        idx === i ? strikeCount++ : ballCount++;
      }
    }

    let resultStr = '';
    if (ballCount) {
      resultStr += `${ballCount}볼 `;
    }
    if (strikeCount) {
      resultStr += `${strikeCount}스트라이크`;
    }
    if (!resultStr) {
      resultStr = '낫싱';
    }
    if (strikeCount === 3) {
      resultStr = '✨🎉정답을 맞추셨습니다!🎉✨';
      this._gotAnswer = true;
    }

    return resultStr;
  }

  // eslint-disable-next-line class-methods-use-this
  _generateComputerInput() {
    let answer = Math.floor(Math.random() * 1000);
    while (BaseballGame.checkInvalid(answer.toString())) {
      answer = Math.floor(Math.random() * 1000);
    }

    return answer;
  }
}

/**
 * DOM을 조작하는 코드 ******************************
 */
const userInputElem = document.querySelector('#user-input');
const resultElem = document.querySelector('#result');
const submitBtn = document.querySelector('#submit');
const errorMessage = new Map([
  ['isLen3', '3자리 숫자를 입력해주세요'],
  ['isNum', '숫자만 입력해주세요'],
  ['noZero', '0을 제외한 숫자만 입력해주세요'],
  ['isUnique', '중복되지 않는 숫자로 입력해주세요'],
]);

const setSubmitDisable = function (state) {
  submitBtn.disabled = state;
}

const handleRestartBtn = function (game) {
  game.initGame();
  setSubmitDisable(false);
  userInputElem.value = '';
  resultElem.textContent = '';
};

const createRestartElem = function (game) {
  const restartPara = document.createElement('p');
  const restartBtn = document.createElement('button');

  restartPara.textContent = '게임을 새로 시작하시겠습니까?';
  restartBtn.id = 'game-restart-button';
  restartBtn.textContent = '재시작';
  restartBtn.addEventListener('click', () => handleRestartBtn(game));
  restartPara.appendChild(restartBtn);

  return restartPara;
};

const showResult = function (result, resultElem, game) {
  resultElem.textContent = result;
  if (game.userGotAnswer()) {
    const restartElem = createRestartElem(game);
    resultElem.appendChild(restartElem);
  }
};

const handleSubmitBtn = function (game) {
  const err = BaseballGame.checkInvalid(userInputElem.value);
  if (err) {
    alert(errorMessage.get(err));
    return;
  }

  const userInput = parseInt(userInputElem.value, 10);
  const computerInput = game.getComputerInputNum();
  const result = game.play(computerInput, userInput);

  showResult(result, resultElem, game);
  setSubmitDisable(game.userGotAnswer());
};

const main = () => {
  const game = new BaseballGame();
  submitBtn.addEventListener('click', () => {
    handleSubmitBtn(game);
  });
};

main();
