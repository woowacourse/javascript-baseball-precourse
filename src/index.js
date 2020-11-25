export default class BaseballGame {
  static play(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
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
