export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = '';
    this.start();
  }

  getComputerNumber() {
    let computerInputNumbers = '';

    while (computerInputNumbers.length < 3) {
      const randomNumber = Math.floor(Math.random() * 9 + 1);

      if (this.isDuplicate(computerInputNumbers, randomNumber)) {
        computerInputNumbers += randomNumber.toString();
      }
    }

    return computerInputNumbers;
  }

  isDuplicate(text1, text2) {
    let resultData = false;

    // 중복이 없으면 -1을 출력함
    if (text1.indexOf(text2) === -1) {
      resultData = true;
    }

    return resultData;
  }

  getUserNumber() {
    const userInput = document.querySelector('#user-input');
    const userInputNumber = this.isUserNumberRight(userInput, userInput.value);

    return userInputNumber;
  }

  isUserNumberRight(userInput, text) {
    let returnValue = null;

    if (
      text.length === 3 &&
      isNaN(text) === false &&
      this.isDuplicate(text[0], text[1]) === true &&
      this.isDuplicate(text.slice(0, 2), text[2]) === true
    ) {
      userInput.value = '';
      returnValue = text;
    } else {
      userInput.value = '';
      alert('다시 입력해주세요');
    }

    return returnValue;
  }

  start() {
    const playButton = document.querySelector('#submit');
    this.computerInputNumbers = this.getComputerNumber();

    playButton.addEventListener('click', () => {
      const userInputNumbers = this.getUserNumber();
      const _text = this.play(this.computerInputNumbers, userInputNumbers);

      this.resultToHTML(_text);
    });
  }

  play(computerInputNumbers, userInputNumbers) {
    let resultText = '';

    if (userInputNumbers === null) {
      resultText = '다시 입력하세요';
    } else {
      const [strike, ball] = this.compareNumber(
        computerInputNumbers,
        userInputNumbers
      );
      resultText = this.setResult(strike, ball);
    }

    return resultText;
  }

  compareNumber(computerInputNumbers, userInputNumbers) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (computerInputNumbers.indexOf(userInputNumbers[i]) === i) {
        strike++;
      } else if (computerInputNumbers.indexOf(userInputNumbers[i]) > -1) {
        ball++;
      }
    }

    return [strike, ball];
  }

  setResult(strike, ball) {
    const strStrike = strike.toString();
    const strBall = ball.toString();
    let resultText = '';

    if (strike === 0 && ball === 0) {
      resultText = '낫싱';
    } else if (strike === 3) {
      resultText = '정답입니다.';
    } else if (strike > 0 && ball === 0) {
      resultText = `${strStrike}스트라이크`;
    } else if (strike === 0 && ball > 0) {
      resultText = `${strBall}볼`;
    } else {
      resultText = `${strBall}볼 ${strStrike}스트라이크`;
    }

    return resultText;
  }

  resultToHTML(text) {
    const resultHTML = document.querySelector('#result');
    let buttonOn = false;

    if (text === '정답입니다.') {
      resultHTML.innerHTML =
        text +
        "<br><p>게임을 새로 시작하시겠습니까? <button id='game-restart-button'>게임 재시작</button></p>";
      buttonOn = true;
    } else {
      resultHTML.innerHTML = text;
    }

    this.reStart(buttonOn);
  }

  reStart(value) {
    if (value === true) {
      const restartBtn = document.querySelector('#game-restart-button');

      restartBtn.addEventListener('click', () => {
        window.location.reload();
      });
    }
  }
}

new BaseballGame();

// 생성자 만들기 + 코딩컨벤션 지키기 + 리팩토링 하기 + 요구사항 지켰는 지 확인하기
