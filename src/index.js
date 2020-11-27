export default class BaseballGame {
  constructor() {
    this.initGame();
    this._gotAnswer = false;
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

  static isValidAnswer(answer) {
    return (
      answer.length === 3 &&
      answer[0] !== answer[1] &&
      answer[1] !== answer[2] &&
      answer[0] !== answer[2]
    );
  }

  // eslint-disable-next-line class-methods-use-this
  _generateAnswer() {
    let answer = Math.floor(Math.random() * 1000);
    while (!BaseballGame.isValidAnswer(answer.toString())) {
      answer = Math.floor(Math.random() * 1000);
    }
    return answer;
  }

  initGame() {
    this._computerInputNum = this._generateAnswer();
  }

  getComputerInputNum() {
    return this._computerInputNum;
  }

  userGotAnswer() {
    return this._gotAnswer;
  }
}

const game = new BaseballGame();

// TODO: baseball은 그냥 게임진행용이고, DOM에서 값을 가져오고 넣는건 따로 분리해야 하지 않을까?
// 메소드 테스트용 실행함수
const testMethods = () => {
  const getUserInput = () => document.querySelector('#user-input').value;
  const restartPara = document.createElement('p');
  restartPara.textContent = '게임을 새로 시작하시겠습니까?';
  const restartBtn = document.createElement('button');
  restartBtn.id = 'game-restart-button';
  restartBtn.textContent = '재시작';
  restartBtn.addEventListener('click', () => {
    game.initGame(); // NOTE: () => 가 없으면 에러가 발생함
    document.querySelector('#user-input').value = '';
    document.querySelector('#result').textContent = '';
  });
  restartPara.appendChild(restartBtn);
  const showResult = function (result) {
    document.querySelector('#result').textContent = result;
    console.log(game.userGotAnswer());
    if (game.userGotAnswer()) {
      document.querySelector('#result').appendChild(restartPara);
    }
  };

  document.querySelector('#submit').addEventListener('click', () => {
    const userInput = parseInt(getUserInput(), 10);
    const computerInput = game.getComputerInputNum();
    const result = game.play(computerInput, userInput);
    console.log(computerInput);
    showResult(result);
  });
};
testMethods();
