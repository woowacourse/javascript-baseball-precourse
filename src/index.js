export default class BaseballGame {
  constructor() {
    this.PITCH_COUNT = 3;
    this.handleSubmitClick();
    this.computerInputNumber = this.getComputerInputNumbers();
  }

  handleSubmitClick = () => {
    document.getElementById('submit').addEventListener('click', this.startGame);
  }

  startGame = () => {
    const userInputElem = document.getElementById('user-input');
    const userInputButtonElem = document.getElementById('submit');

    let userInputNumbers = this.parseUserInput(userInputElem.value);
        
    // 사용자 입력에 오류가 있을 겨우 반환 숫자 배열이 없음으로 play 메소드를 실행하지 않음
    if (userInputNumbers.length === 0) {
      return;
    }
  
    this.play(this.computerInputNumber, userInputNumbers);
  }

  play = (computerInputNumbers, userInputNumbers) => {
    console.log(computerInputNumbers, userInputNumbers);

    const ballCount = this.getBallCount(computerInputNumbers, userInputNumbers);
    const strikeCount = this.getStrikeCount(computerInputNumbers, userInputNumbers);
    const gameResult = this.getGameResultString(ballCount, strikeCount);

    this.displayResult(gameResult);

    if (gameResult === '정답') {
      this.restartGame();
    } else if (gameResult !== '정답') {
      this.continueGame();
    }

    return gameResult;
  }

  getBallCount = (computerInputNumbers, userInputNumbers) => {
    let ballCount = 0;
    
    for (let pitch = 0; pitch < this.PITCH_COUNT; pitch++) {
      if (computerInputNumbers.includes(userInputNumbers[pitch]) && 
        computerInputNumbers[pitch] !== userInputNumbers[pitch]) {
          ballCount++;
        }
    }

    return ballCount;
  }

  getStrikeCount = (computerInputNumbers, userInputNumbers) => {
    let strikeCount = 0;

    for (let pitch = 0; pitch < this.PITCH_COUNT; pitch++) {
      if (computerInputNumbers[pitch] === userInputNumbers[pitch]) {
        strikeCount++;
      }
    }

    return strikeCount;
  }

  getGameResultString = (ballCount, strikeCount) => {
    let gameResultString;

    if (strikeCount === 3) {
      gameResultString = '정답';
    } else if (ballCount === 0 && strikeCount === 0) {
      gameResultString = '낫싱';
    } else if (ballCount > 0 && strikeCount > 0) {
      gameResultString = `${ballCount}볼 ${strikeCount}스트라이크`;
    } else if (ballCount > 0 && strikeCount === 0) {
      gameResultString = `${ballCount}볼`;
    } else if (ballCount === 0 && strikeCount > 0) {
      gameResultString = `${strikeCount}스트라이크`;
    }

    return gameResultString;
  }

  displayResult = (gameResult) => {
    let gameResultDisplay;

    if (gameResult === '정답') {
      gameResultDisplay = document.getElementById('result').innerHTML += 
      `<p><strong>🎉 정답을 맞추셨습니다! 🎉</strong></p>
      <span>게임을 새로 시작하시겠습니까? </span>
      <button id="game-restart-button">재시작</button>`;
    } else if (gameResult !== '정답') {
      gameResultDisplay = document.getElementById('result').innerHTML += `<p>${gameResult}<p><hr /><br />`;
    }

    gameResultDisplay;
  }

  restartGame = () => {
    document.getElementById('game-restart-button').addEventListener('click', () => {
      this.displayNewInput();

      new BaseballGame();
    });
  }

  displayNewInput = () => {
    document.getElementById('app').innerHTML = 
      `<h1>⚾ 숫자 야구 게임</h1>
      <p>
        <strong>1~9까지의 수</strong>를 중복없이 <strong>3개</strong>를
        작성해주세요. <br />
        올바른 예) 139 <br />
        틀린 예) 122
      </p>
      <input type="text" id="user-input" />
      <button id="submit">확인</button>
      <h3>📄 결과</h3>
      <div id="result"></div>`;
  }

  continueGame = () => {
    this.displayNextInput();
    document.getElementById('submit').addEventListener('click', this.startGame);
  }

  displayNextInput = () => {
    this.deletePreviousAttributes();

    const appElem = document.getElementById('app');
    const inputElem = document.createElement('input');
    inputElem.setAttribute('type', 'text');
    inputElem.setAttribute('id', 'user-input');

    const inputElemText = document.createTextNode(' ');
    const buttonElem = document.createElement('button');
    buttonElem.setAttribute('id', 'submit');

    const buttonElemText = document.createTextNode('확인');
    const h3Elem = document.createElement('h3');
    const h3ElemText = document.createTextNode('📄 결과')
    const resultDivElem = document.createElement('div');
    resultDivElem.setAttribute('id', 'result');

    appElem.appendChild(inputElem);
    appElem.appendChild(inputElemText);
    appElem.appendChild(buttonElem);
    buttonElem.appendChild(buttonElemText);
    appElem.appendChild(h3Elem);
    h3Elem.appendChild(h3ElemText);
    appElem.appendChild(resultDivElem);
  }

  deletePreviousAttributes = () => {
    document.getElementById('user-input').removeAttribute('id');
    document.getElementById('submit').removeAttribute('id');
    document.getElementById('result').removeAttribute('id');
  }

  getComputerInputNumbers = () => {
    let computerInputNumbers = [];
    let pitch = 0;
    let randomNumber;

    while (pitch < this.PITCH_COUNT) {
      randomNumber = this.getRandomNumber();

      if (!computerInputNumbers.includes(randomNumber)) {
        computerInputNumbers.push(randomNumber);
        pitch++;
      }
    }

    return computerInputNumbers;
  }

  getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 9 + 1);

    return randomNumber;
  }

  parseUserInput = (userInputNumberAsString) => {
    const userInputNumbers = userInputNumberAsString.split('').map((numberAsString) => parseInt(numberAsString, 10));

    if (this.isInputError(userInputNumbers)) {
      alert('올바르지 않은 입력입니다. 3자리 수의 중복되지 않는 숫자를 입력해주세요!');

      return [];
    }

    return userInputNumbers;
  }

  isInputError = (userInputNumbers) => {
    if (this.isWrongNumberLength(userInputNumbers) || 
    this.isNotNumberType(userInputNumbers) || 
    this.isNumberOverlap(userInputNumbers) || 
    this.isIncludeZero(userInputNumbers)) {

      return true;
    }
  }

  isWrongNumberLength = (userInputNumbers) => {
    if (userInputNumbers.length !== this.PITCH_COUNT) {
      console.log('Number length error');

      return true;
    }
  }

  isNotNumberType = (userInputNumbers) => {
    for (let pitch = 0; pitch < this.PITCH_COUNT; pitch++) {
      if (isNaN(userInputNumbers[0])) {
        console.log('Type Error');

        return true;
      }
    }
  }

  isNumberOverlap = (userInputNumbers) => {
    const userInputNumberSet = new Set(userInputNumbers);
    if (userInputNumbers.length !== userInputNumberSet.size) {
      console.log('Number overlap error');

      return true;
    }
  }

  isIncludeZero = (userInputNumbers) => {
    if (userInputNumbers.includes(0)) {
      console.log('Zero contain error');

      return true;
    }
  }
}

new BaseballGame();
