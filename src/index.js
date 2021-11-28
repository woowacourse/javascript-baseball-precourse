import { NumberRules, Message } from './constant.js';

export default class BaseballGame {
  constructor() {
    this.answer = this.getAnswer();
    this.userInputEl = document.querySelector('#user-input');
    this.resultEl = document.querySelector('#result');
    this.appEl = document.querySelector('#app');
    this.submitButtonEl = document.querySelector('#submit');
    this.submitButtonBinding();
  }

  getAnswer() {
    const answer = [];
    while (answer.length < NumberRules.length) {
      const num = MissionUtils.Random.pickNumberInRange(
        NumberRules.min,
        NumberRules.max,
      );
      if (answer.indexOf(num) === -1) {
        answer.push(num);
      }
    }
    return answer.join('');
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
      if (
        userInputNumbers[i] < `${NumberRules.min}` ||
        userInputNumbers[i] > `${NumberRules.max}`
      ) {
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

  isAllCorrectUserInput(userInputNumbers) {
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
    if (this.isAllCorrectUserInput(this.userInputEl.value)) {
      this.resultEl.innerHTML = this.resultText(
        this.compareAnswer(this.answer, this.userInputEl.value),
      );
    } else {
      alert(Message.error);
    }
    this.userInputEl.value = '';
  }

  submitButtonBinding() {
    this.submitButtonEl.addEventListener('click', () =>
      this.submitButtonHandle(),
    );
  }

  strikeBallText(strikeCount, ballCount) {
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
      return Message.success;
    }
    return this.strikeBallText(strikeCount, ballCount);
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
    this.restartButtonEl.addEventListener('click', () =>
      this.restartButtonHandle(),
    );
    this.appEl.appendChild(this.restartButtonEl);
  }

  restartButtonHandle() {
    this.answer = this.getAnswer();
    this.resultEl.innerHTML = '';
    this.restartTextEl.remove();
    this.restartButtonEl.remove();
  }

  play(computerInputNumbers, userInputNumbers) {
    if (this.isAllCorrectUserInput(userInputNumbers)) {
      return this.resultText(
        this.compareAnswer(computerInputNumbers, userInputNumbers),
      );
    }
    alert(Message.error);
    return Message.error;
  }
}

new BaseballGame();
