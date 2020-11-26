export default class BaseballGame {
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

  static getUserInput() {
    return document.querySelector('#user-input').value;
  }

  static isValidAnswer(answer) {
    return (
      answer.length === 3 &&
      answer[0] !== answer[1] &&
      answer[1] !== answer[2] &&
      answer[0] !== answer[2]
    );
  }

  static generateAnswer() {
    let answer = Math.floor(Math.random() * 1000).toString();
    while (!this.isValidAnswer(answer)) {
      answer = Math.floor(Math.random() * 1000).toString();
    }
    return answer;
  }
}

const game = new BaseballGame();

// 메소드 테스트용 실행함수
const testMethods = () => {
  console.log(`generateAnswer: ${BaseballGame.generateAnswer()}`);
};
testMethods();
