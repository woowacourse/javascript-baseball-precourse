export default class GetResultMessage {
  constructor(message) {
    this.message = message;
    this.correctMessage = `
    <b>🎉 정답을 맞추셨습니다! 🎉</b>
    <br/ >
    <br/ >
    게임을 새로 시작하시겠습니까?
    <button id='game-restart-button'>게임 재시작</button>
    `;
  }

  main() {
    if (this.message !== '3스트라이크') {
      return this.message;
    }
    return this.correctMessage;
  }
}
