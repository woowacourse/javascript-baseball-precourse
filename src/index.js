export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = '';
    this.startGame();
  }

  getComputerNumber() {
    let _computerInputNumbers = '';

    while (_computerInputNumbers.length < 3) {
      const randomNumber = Math.floor(Math.random() * 9 + 1);

      if (this.isDuplicate(_computerInputNumbers, randomNumber)) {
        _computerInputNumbers += randomNumber.toString();
      }
    }

    return _computerInputNumbers;
  }

  isDuplicate(firstString, secondString) {
    let checkValue = false;

    // 중복이 없으면 -1을 출력함
    if (firstString.indexOf(secondString) === -1) {
      checkValue = true;
    }

    return checkValue;
  }

  getUserNumber() {
    const userInput = document.querySelector('#user-input');
    const userInputNumber = this.isUserNumberRight(userInput, userInput.value);

    return userInputNumber;
  }

  isUserNumberRight(userInput, _userInputNumbers) {
    let returnUserNumberValue = null;

    if (
      _userInputNumbers.length === 3 &&
      isNaN(_userInputNumbers) === false &&
      this.isDuplicate(_userInputNumbers[0], _userInputNumbers[1]) === true &&
      this.isDuplicate(_userInputNumbers.slice(0, 2), _userInputNumbers[2]) ===
        true
    ) {
      userInput.value = '';
      returnUserNumberValue = _userInputNumbers;
    } else {
      userInput.value = '';
      alert('다시 입력해주세요');
    }

    return returnUserNumberValue;
  }

  startGame() {
    const playButton = document.querySelector('#submit');
    this.computerInputNumbers = this.getComputerNumber();

    playButton.addEventListener('click', () => {
      const userInputNumbers = this.getUserNumber();
      const gameResult = this.play(this.computerInputNumbers, userInputNumbers);

      this.resultToHTML(gameResult);
    });
  }

  play(_computerInputNumbers, _userInputNumbers) {
    let resultText = '';

    if (_userInputNumbers === null) {
      resultText = '다시 입력하세요';
    } else {
      const [strike, ball] = this.compareNumber(
        _computerInputNumbers,
        _userInputNumbers
      );
      resultText = this.setResult(strike, ball);
    }

    return resultText;
  }

  compareNumber(_computerInputNumbers, _userInputNumbers) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (_computerInputNumbers.indexOf(_userInputNumbers[i]) === i) {
        strike++;
      } else if (_computerInputNumbers.indexOf(_userInputNumbers[i]) > -1) {
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
      resultText = '🎉정답을 맞추셨습니다!🎉';
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

    if (text === '🎉정답을 맞추셨습니다!🎉') {
      resultHTML.innerHTML =
        `<strong>${text}</strong>` +
        "<br><p>게임을 새로 시작하시겠습니까? <button id='game-restart-button'>게임 재시작</button></p>";
      buttonOn = true;
    } else {
      resultHTML.innerHTML = text;
    }

    this.reStart(buttonOn);
  }

  reStart(value) {
    if (value === true) {
      const restartButton = document.querySelector('#game-restart-button');

      restartButton.addEventListener('click', () => {
        window.location.reload();
      });
    }
  }
}

new BaseballGame();
