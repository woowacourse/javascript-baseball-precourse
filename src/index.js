export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    const ball = this.checkBall(computerInputNumbers, userInputNumbers);
    const strike = this.checkStrike(computerInputNumbers, userInputNumbers);
    if (ball === 0 && strike === 0) {
      return '낫싱';
    }
    let retStr = '';
    if (ball > 0) {
      retStr += `${ball}볼 `;
    }
    if (strike > 0) {
      retStr += `${strike}스트라이크`;
    }
    return retStr;
  }

  checkBall(computerInputNumbers, userInputNumbers) {
    let count = 0;
    if (computerInputNumbers[0] === userInputNumbers[1]) {
      count++;
    }
    if (computerInputNumbers[0] === userInputNumbers[2]) {
      count++;
    }
    if (computerInputNumbers[1] === userInputNumbers[0]) {
      count++;
    }
    if (computerInputNumbers[1] === userInputNumbers[2]) {
      count++;
    }
    if (computerInputNumbers[2] === userInputNumbers[0]) {
      count++;
    }
    if (computerInputNumbers[2] === userInputNumbers[1]) {
      count++;
    }
    return count;
  }

  checkStrike(computerInputNumbers, userInputNumbers) {
    let count = 0;
    if (computerInputNumbers[0] === userInputNumbers[0]) {
      count++;
    }
    if (computerInputNumbers[1] === userInputNumbers[1]) {
      count++;
    }
    if (computerInputNumbers[2] === userInputNumbers[2]) {
      count++;
    }
    return count;
  }

  checkInput(userInputNumbers) {
    let ret = true;
    if (ret && userInputNumbers.match(/^[1-9]{3}$/) === null) {
      ret = false;
    }
    if (ret && (
      userInputNumbers[0] === userInputNumbers[1]
      || userInputNumbers[0] === userInputNumbers[2]
      || userInputNumbers[1] === userInputNumbers[2]
    )) {
      ret = false;
    }
    if (!ret) {
      alert('1~9까지의 수를 중복없이 3개를 작성해주세요.');
    }
    return ret;
  }
}

const baseballGame = new BaseballGame();
let randomNumber;

function startGame() {
  const userInput = document.getElementById('user-input');
  const submit = document.getElementById('submit');
  const result = document.getElementById('result');

  userInput.value = '';
  result.innerHTML = '';

  do {
    randomNumber = Math.floor(Math.random() * 1000).toString();
  } while (
    randomNumber.match(/^[1-9]{3}$/) === null
    || randomNumber[0] === randomNumber[1]
    || randomNumber[0] === randomNumber[2]
    || randomNumber[1] === randomNumber[2]
  );

  submit.onclick = function () {
    const userInput = document.getElementById('user-input');
    if (baseballGame.checkInput(userInput.value)) {
      const ret = baseballGame.play(randomNumber, userInput.value);
      if (ret === '3스트라이크') {
        result.innerHTML = '<p>🎉 <b>정답을 맞추셨습니다!</b> 🎉</p>'
                         + '<p>게임을 새로 시작하시겠습니까? '
                         + '<button id="game-restart-button">게임 재시작</button></p>';
        document.getElementById('game-restart-button').onclick = startGame;
      } else {
        result.innerHTML = ret;
      }
    }
  };
}
