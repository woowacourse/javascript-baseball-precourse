export default class BaseballGame {
  constructor() {
    this._computerInputNum = this._generateAnswer();
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

  isValidAnswer(answer) {
    return (
      answer.length === 3 &&
      answer[0] !== answer[1] &&
      answer[1] !== answer[2] &&
      answer[0] !== answer[2]
    );
  }

  _generateAnswer() {
    let answer = Math.floor(Math.random() * 1000);
    while (!this.isValidAnswer(answer.toString())) {
      answer = Math.floor(Math.random() * 1000);
    }
    return answer;
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

  document.querySelector('#submit').addEventListener('click', () => {
    const userInput = parseInt(getUserInput(), 10);
    const computerInput = game.getComputerInputNum();
    console.log(computerInput);
    const result = BaseballGame.play(computerInput, userInput);
    showResult(result);
  });
};
testMethods();
