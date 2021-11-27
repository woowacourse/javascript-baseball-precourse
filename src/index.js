export default class BaseballGame {
  constructor() {
    this.answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join(
      '',
    );
    this.userInputEl = document.querySelector('#user-input');
    this.resultEl = document.querySelector('#result');
    this.appEl = document.querySelector('#app');
    this.submitButtonEl = document.querySelector('#submit');
    this.submitButtonBinding();
  }

  isDifferentUserInput(userInputNumbers) {
    const userInputSet = new Set(userInputNumbers.split(''));
    if (userInputSet.size !== userInputNumbers.length) {
      return false;
    }
    return true;
  }

  isUserInputWithinRange(userInputNumbers) {
    for (let i = 0; i < userInputNumbers.length; i += 1) {
      if (userInputNumbers[i] < '1' || userInputNumbers[i] > '9') {
        return false;
      }
    }
    return true;
  }

  isCorrectUserInputLength(userInputNumbers) {
    if (userInputNumbers.length === 3) {
      return true;
    }
    return false;
  }

  isCorrectUserInput(userInputNumbers) {
    return (
      this.isDifferentUserInput(userInputNumbers) &&
      this.isUserInputWithinRange(userInputNumbers) &&
      this.isCorrectUserInputLength(userInputNumbers)
    );
  }

  compareAnswer(computerInputNumbers, userInputNumbers) {
    let strikeCount = 0;
    let ballCount = 0;
    userInputNumbers.split('').forEach((element, index) => {
      if (computerInputNumbers.indexOf(element) === index) {
        strikeCount += 1;
      }
      if (
        computerInputNumbers.indexOf(element) !== index &&
        computerInputNumbers.indexOf(element) !== -1
      ) {
        ballCount += 1;
      }
    });
    return [strikeCount, ballCount];
  }

  submitButtonHandle() {
    if (this.isCorrectUserInput(this.userInputEl.value)) {
      this.resultEl.innerHTML = this.resultText(
        this.compareAnswer(this.answer, this.userInputEl.value),
      );
    } else {
      alert('1 ~ 9의 중복되지 않는 숫자 3자리를 입력하세요!');
    }
    this.userInputEl.value = '';
  }

  submitButtonBinding() {
    this.submitButtonEl.addEventListener('click', () => {
      this.submitButtonHandle();
    });
  }

  notAnswerText(strikeCount, ballCount) {
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
  }

  resultText([strikeCount, ballCount]) {
    if (strikeCount === 3) {
      this.createRestartSpan();
      this.createRestartButton();
      return '🎉 정답을 맞추셨습니다! 🎉 ';
    }
    return this.notAnswerText(strikeCount, ballCount);
  }

  createRestartSpan() {
    this.restartTextEl = document.createElement('span');
    this.restartTextEl.innerHTML = '게임을 새로 시작하시겠습니까? ';
    this.appEl.appendChild(this.restartTextEl);
  }

  createRestartButton() {
    this.restartButtonEl = document.createElement('button');
    this.restartButtonEl.id = 'game-restart-button';
    this.restartButtonEl.innerHTML = '재시작';
    this.restartButtonEl.addEventListener('click', this.restartButtonHandle);
    this.appEl.appendChild(this.restartButtonEl);
  }

  restartButtonHandle() {
    this.answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join(
      '',
    );
    this.resultEl.innerHTML = '';
    this.restartTextEl.remove();
    this.restartButtonEl.remove();
  }

  play(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  }
}

new BaseballGame();
