export default class ApplyToTemplate {
  constructor(resultMessage) {
    this.resultMessage = resultMessage;
    this.$result = document.querySelector('#result');
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

    console.log('정답!!');
  }
}
