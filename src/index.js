export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = this.setComputerNumber();
    this.userInputText = document.querySelector('#user-input');
    this.submitButton = document.querySelector('#submit');
    this.gameResultContainer = document.querySelector('#result');

    this.submitButton.addEventListener('click', () => this.startGame());
  }

  setComputerNumber() {
    let computerInputNumbers = [];
    let randomNumber;
    while (computerInputNumbers.length < 3) {
      randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerInputNumbers.includes(randomNumber)) {
        computerInputNumbers.push(randomNumber);
      }
    }
    console.log(`computerInput: ${computerInputNumbers.join('')}`);
    return computerInputNumbers.join('');
  }

  isDuplicated(userInputNumbers) {
    const numberArray = userInputNumbers.split('');
    let flag = false;
    numberArray.forEach(element => {
      if (numberArray.indexOf(element) !== numberArray.lastIndexOf(element)) {
        flag = true;
      }
    });
    return flag;
  }

  isValidNumber(userInputNumbers) {
    if (userInputNumbers.length !== 3) {
      return false;
    }
    if (isNaN(userInputNumbers)) {
      return false;
    }
    if (userInputNumbers.includes('0')) {
      return false;
    }
    if (this.isDuplicated(userInputNumbers)) {
      return false;
    }
    return true;
  }

  getUserInput() {
    const inputValue = this.userInputText.value;
    if (this.isValidNumber(inputValue)) {
      return inputValue;
    }
    alert(`error input`);
    return null;
  }

  setUserInputClean() {
    this.userInputText.value = '';
  }

  isStrike(target, idx) {
    if (this.computerInputNumbers.includes(target)) {
      if (this.computerInputNumbers.indexOf(target) === idx) {
        return true;
      }
    }
    return false;
  }

  isBall(target, idx) {
    if (this.computerInputNumbers.includes(target)) {
      if (this.computerInputNumbers.indexOf(target) !== idx) {
        return true;
      }
    }
    return false;
  }

  countStrikeAndBall(userInputNumbers) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < userInputNumbers.length; i++) {
      if (this.isStrike(userInputNumbers[i], i)) {
        strike++;
      }
      if (this.isBall(userInputNumbers[i], i)) {
        ball++;
      }
    }
    return [strike, ball];
  }

  getGameResultText(strikeCount, ballCount) {
    let gameResult = [];
    if (ballCount) {
      gameResult.push(`${ballCount}볼`);
    }
    if (strikeCount) {
      gameResult.push(`${strikeCount}스트라이크`);
    }
    if (ballCount === 0 && strikeCount === 0) {
      gameResult.push(`낫싱`);
    }
    return gameResult.join(' ');
  }

  play(computerInputNumbers, userInputNumbers) {
    console.log(`${this.computerInputNumbers} vs. ${userInputNumbers}`);
    const [strikeCount, ballCount] = this.countStrikeAndBall(userInputNumbers);
    const gameResult = this.getGameResultText(strikeCount, ballCount);
    console.log(gameResult);
    return gameResult;
  }

  createHtmlRetryItem() {
    return `
    <p><strong>🎉 정답을 맞추셨습니다! 🎉</strong></p>
    <p>게임을 새로 시작하시겠습니까? <button id="retry">게임 재시작</button></p>
    `;
  }

  gameEnd() {
    this.gameResultContainer.innerHTML = this.createHtmlRetryItem();
    const retryButton = document.querySelector('#retry');
    retryButton.addEventListener('click', () => console.log(`retry`));
  }

  showGameResult(gameResult) {
    if (gameResult === '3스트라이크') {
      this.gameEnd();
      return;
    }
    this.gameResultContainer.innerHTML = `${gameResult}`;
  }

  startGame() {
    const userInputNumbers = this.getUserInput();
    this.setUserInputClean();
    if (userInputNumbers == null) {
      return;
    }
    const gameResult = this.play(this.computerInputNumbers, userInputNumbers);
    this.showGameResult(gameResult);
  }
}

new BaseballGame();
