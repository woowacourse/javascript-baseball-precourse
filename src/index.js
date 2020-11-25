export default class BaseballGame {
  static play(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  }

  static getUserInput() {
    return document.querySelector('#user-input').value;
  }
}

const game = new BaseballGame();
