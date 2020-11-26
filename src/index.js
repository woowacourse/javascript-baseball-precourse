export default class BaseballGame {
  constructor() {
    this.initGame();
  }

  static play(computerInputNumbers, userInputNumbers) {
    const computerInputStr = computerInputNumbers.toString();
    const userInputStr = userInputNumbers.toString();
    let ballCount = 0;
    let strikeCount = 0;

    for (let i = 0; i < userInputStr.length; i++) {
      const idx = computerInputStr.indexOf(userInputStr[i]);
      if (idx < 0) continue;
      idx === i ? strikeCount++ : ballCount++;
    }

    let resultStr = '';
    if (ballCount) resultStr += `${ballCount}볼 `;
    if (strikeCount) resultStr += `${strikeCount}스트라이크`;
    if (!resultStr) resultStr = '낫싱';

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
}

const game = new BaseballGame();

// TODO: baseball은 그냥 게임진행용이고, DOM에서 값을 가져오고 넣는건 따로 분리해야 하지 않을까?
// 메소드 테스트용 실행함수
const testMethods = () => {
  const getUserInput = () => document.querySelector('#user-input').value;
  const showResult = function (result) {
    document.querySelector('#result').textContent = result;
  };
  const restartBtn = document.createElement('button');
  restartBtn.id = 'game-restart-button';
  restartBtn.textContent = '재시작';
  restartBtn.addEventListener('click', () => {
    game.initGame(); // NOTE: () => 가 없으면 에러가 발생함
    document.querySelector('#user-input').value = '';
    document.querySelector('#result').textContent = '';
  });

  document.querySelector('#submit').addEventListener('click', () => {
    const userInput = parseInt(getUserInput(), 10);
    const computerInput = game.getComputerInputNum();
    const result = BaseballGame.play(computerInput, userInput);
    console.log(computerInput)
    showResult(result);
    if (result === '3스트라이크') {
      document.querySelector('#result').appendChild(restartBtn);
    }
  });
};
testMethods();
