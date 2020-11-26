import Utils from './utils.js';

const game = new BaseballGame(3);
let computerInputNumbers = '';

const userInputElem = document.querySelector('#user-input');
const resultElem = document.querySelector('#result');
const playBtn = document.querySelector('#submit');

playBtn.addEventListener('click', showGameResult);

function showGameResult(e) {
  e.preventDefault();
  game.initialize(resultElem);

  computerInputNumbers = game.getComputerInputnumbers(computerInputNumbers);
  const userInputNumbers = game.getUserInputnumbers();

  const gameResult = game.play(computerInputNumbers, userInputNumbers);
  resultElem.insertAdjacentHTML('afterbegin', gameResult);
}

export default function BaseballGame(N) {
  const util = new Utils();

  this.initialize = (elem) => {
    if (elem.tagName == 'DIV') {
      return (elem.innerHTML = '');
    }
    if (elem.tagName == 'INPUT') {
      return (elem.value = '');
    }
  };

  this.getComputerInputnumbers = (numbers) => {
    if (numbers !== '') {
      return numbers;
    }
    numbers = util.generateRandomNumbers(N);
    console.log(`⚾ADMIN: Sorry For The Spolier! The Answer Is... ${numbers}`);
    return numbers;
  };

  this.getUserInputnumbers = () => {
    const numbers = userInputElem.value;
    console.log(`⚾ADMIN: Your Guess Is... ${numbers}`);
    return numbers;
  };

  this.play = (computerInputNumbers, userInputNumbers) => {
    let score = this.markScore(computerInputNumbers, userInputNumbers);
    return this.getGameResult(score);
  };

  this.markScore = (computerInputNumbers, userInputNumbers) => {
    let score = {
      strike: 0,
      ball: 0,
    };

    for (let i in userInputNumbers) {
      if (userInputNumbers[i] === computerInputNumbers[i]) {
        score.strike++;
        continue;
      }
      if (computerInputNumbers.includes(userInputNumbers[i])) {
        score.ball++;
      }
    }
    return score;
  };

  this.getGameResult = (score) => {
    if (score.strike === N) {
      this.prepareRestartButton();
      return `<h4>🎉정답을 맞추셨습니다!🎉</h4>게임을 새로 시작하시겠습니까? `;
    }
    if (score.strike === 0 && score.ball === 0) {
      return `낫싱`;
    }
    let msg = '';
    if (score.ball !== 0) {
      msg += `${score.ball}볼 `;
    }
    if (score.strike !== 0) {
      msg += `${score.strike}스트라이크`;
    }
    return msg;
  };

  this.prepareRestartButton = () => {
    let restartElem = util.createBtn('game-restart-button', '게임 재시작');

    restartElem.addEventListener('click', function restart(e) {
      e.preventDefault();
      computerInputNumbers = '';
      resultElem.innerHTML = '';
      userInputElem.value = '';
      restartElem.remove();
    });
    this.initialize(resultElem);
    resultElem.append(restartElem);
    console.log(`⚾ADMIN: You Win!💛💛💛`);
  };
}
