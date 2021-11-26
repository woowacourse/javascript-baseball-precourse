export default class ApplyToTemplate {
  constructor(resultMessage) {
    this.resultMessage = resultMessage;
    this.$result = document.querySelector('#result');
  }

  templateToApplyForCorrectAnswer() {
    // 정답일 경우 적용하는 template
    this.$result.innerHTML = `
    <b>🎉 정답을 맞추셨습니다! 🎉</b>
    <br/ >
    <br/ >
    게임을 새로 시작하시겠습니까?
    <button id='game-restart-button'>게임 재시작</button>
    `;
  }

  templateToApplyForIncorrectAnswer() {
    // 오답일 경우 적용하는 template
    this.$result.textContent = this.resultMessage;
  }

  main() {
    if (this.resultMessage !== '3스트라이크') {
      this.templateToApplyForIncorrectAnswer();
      return;
    }

    this.templateToApplyForCorrectAnswer();
  }
}
