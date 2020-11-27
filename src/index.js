export default class BaseballGame {
  constructor() {
    this.initGame();
  }

  // 입력한 숫자가 지켜야하는 조건
  static validator = {
    isLen3: input => input.length === 3,
    isNum: input => input == parseInt(input, 10),
    noZero: input => !input.includes(0),
    isUnique: input => new Set(input).size === input.length,
  };

  // validator를 순회하여 오류가 있는 validation 이름을 리턴한다
  static checkValid(input) {
    // eslint-disable-next-line no-restricted-syntax
    for (const [name, valid] of Object.entries(BaseballGame.validator)) {
      if (!valid(input)) {
        return name;
      }
    }
    return '';
  }

  play(computerInputNumbers, userInputNumbers) {
    const computerInputStr = computerInputNumbers.toString();
    const userInputStr = userInputNumbers.toString();
    let ballCount = 0;
    let strikeCount = 0;

    for (let i = 0; i < userInputStr.length; i++) {
      const idx = computerInputStr.indexOf(userInputStr[i]);
      if (idx < 0) continue;
      // eslint-disable-next-line no-unused-expressions
      idx === i ? strikeCount++ : ballCount++;
    }

    let resultStr = '';
    if (ballCount) resultStr += `${ballCount}볼 `;
    if (strikeCount) resultStr += `${strikeCount}스트라이크`;
    if (!resultStr) resultStr = '낫싱';
    if (strikeCount === 3) {
      resultStr = '✨🎉정답을 맞추셨습니다!🎉✨';
      this._gotAnswer = true;
    }

    return resultStr;
  }

  // eslint-disable-next-line class-methods-use-this
  _generateAnswer() {
    let answer = 0;
    while (true) {
      answer = Math.floor(Math.random() * 1000);
      if (BaseballGame.checkValid(answer.toString())) continue;
      break;
    }
    return answer;
  }

  initGame() {
    console.log(`initGame: ${this}`);
    console.log(this);
    this._computerInputNum = this._generateAnswer();
    this._gotAnswer = false;
  }

  getComputerInputNum() {
    return this._computerInputNum;
  }

  userGotAnswer() {
    return this._gotAnswer;
  }
}

const userInputElem = document.querySelector('#user-input');
const resultElem = document.querySelector('#result');
const submitBtn = document.querySelector('#submit');

const handleRestartBtn = function (game) {
  game.initGame();
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

// TODO: baseball은 그냥 게임진행용이고, DOM에서 값을 가져오고 넣는건 따로 분리해야 하지 않을까?
// 메소드 테스트용 실행함수
const testMethods = () => {
  const game = new BaseballGame();
  const restartElem = createRestartElem(game);
  const showResult = function (result) {
    resultElem.textContent = result;
    if (game.userGotAnswer()) {
      resultElem.appendChild(restartElem);
    }
  };

  submitBtn.addEventListener('click', () => {
    // validation 확인후 alert
    const errorMessage = new Map([
      ['isLen3', '3자리 숫자를 입력해주세요'],
      ['isNum', '숫자만 입력해주세요'],
      ['noZero', '1~9까지의 숫자만 입력해주세요'],
      ['isUnique', '중복되지 않는 숫자로 입력해주세요'],
    ]);

    const err = BaseballGame.checkValid(userInputElem.value);
    if (err) {
      alert(errorMessage.get(err));
      return;
    }
    const userInput = parseInt(userInputElem.value, 10);
    const computerInput = game.getComputerInputNum();
    const result = game.play(computerInput, userInput);
    console.log(computerInput);
    showResult(result);
  });
};
testMethods();
