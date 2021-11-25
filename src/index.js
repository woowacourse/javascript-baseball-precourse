export default class BaseballGame {
  constructor() {
    this.answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join(
      '',
    );
    this.userInputEl = document.querySelector('#user-input');
    this.resultEl = document.querySelector('#result');
    this.appEl = document.querySelector('#app');
    this.submitButtonEl = document.querySelector('#submit');
    this.submitButtonEl.addEventListener('click', this.submitButtonHandle);
  }

  isNotUserInputDuplicate = () => {
    const userInputSet = new Set(this.userInputEl.value.split(''));
    if ([...userInputSet].length !== this.userInputEl.value.length) {
      return false;
    }
    return true;
  };

  isUserInputNumberRange = () => {
    for (let i = 0; i < this.userInputEl.value.length; i += 1) {
      if (this.userInputEl.value[i] < '1' || this.userInputEl.value[i] > '9') {
        return false;
      }
    }
    return true;
  };

  isUserInputNumberLength = () => {
    if (this.userInputEl.value.length === 3) {
      return true;
    }
    return false;
  };

  isUserInputCheck = () => {
    return (
      this.isNotUserInputDuplicate() &&
      this.isUserInputNumberRange() &&
      this.isUserInputNumberLength()
    );
  };

  compareAnswer = () => {
    let strikeCount = 0;
    let ballCount = 0;
    this.userInputEl.value.split('').forEach((element, index) => {
      if (this.answer.indexOf(element) === index) {
        strikeCount += 1;
      }
      if (
        this.answer.indexOf(element) !== index &&
        this.answer.indexOf(element) !== -1
      ) {
        ballCount += 1;
      }
    });
    return [strikeCount, ballCount];
  };

  submitButtonHandle = () => {
    if (this.isUserInputCheck()) {
      this.resultEl.innerHTML = this.resultText(this.compareAnswer());
      this.userInputEl.value = '';
    } else {
      alert('1 ~ 9의 중복되지 않는 숫자 3자리를 입력하세요!');
      this.userInputEl.value = '';
    }
  };

  notAnswerText = (strikeCount, ballCount) => {
    let printText = '';
    if (ballCount !== 0) {
      printText += `${ballCount}볼`;
    }
    if (ballCount !== 0 && strikeCount !== 0) {
      printText += ' ';
    }
    if (strikeCount !== 0) {
      printText += `${strikeCount}스트라이크`;
    }
    if (ballCount === 0 && strikeCount === 0) {
      printText += '낫싱';
    }
    return printText;
  };

  resultText = ([strikeCount, ballCount]) => {
    if (strikeCount === 3) {
      this.createRestartText();
      this.createRestartButton();
      return '🎉 정답을 맞추셨습니다! 🎉 ';
    }
    return this.notAnswerText(strikeCount, ballCount);
  };

  createRestartText = () => {
    const reStartTextEl = document.createElement('span');
    reStartTextEl.innerHTML = '게임을 새로 시작하시겠습니까? ';
    this.appEl.appendChild(reStartTextEl);
  };

  createRestartButton = () => {
    const reStartButtonEl = document.createElement('button');
    reStartButtonEl.id = 'game-restart-button';
    reStartButtonEl.innerHTML = '재시작';
    this.appEl.appendChild(reStartButtonEl);
  };

  play(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  }
}

new BaseballGame();
