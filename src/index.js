export default class BaseballGame {
  constructor() {
      this.submitButton = document.getElementById('submit');
      this.userInput = document.getElementById('user-input');
      this.result = document.getElementById('result');
      this.isCorrect = false;
      this.init();
  }

  init(){
    this.result.innerText = '';
    this.checkButtonPressed();
    this.computerInputNumbers = this.randomGenerator();
  }

  randomGenerator() {
    let answer = new Array();
    while(new Set(answer).size !== 3) {
      const num = MissionUtils.Random.pickNumberInRange(1,9);
      if(!answer.includes(num)) {
        answer.push(num);
      }
    }
    return answer;
  }

  checkButtonPressed() {
    this.submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      const userInputNumbers = this.userInput.value;
      const valid = this.checkAnswerValidation(userInputNumbers);
      if (valid) {
        this.showResultMessage(this.play(this.computerInputNumbers,userInputNumbers));
      } else {
        alert('잘못된 값을 입력했습니다.');
      }
    });
  }
  
  checkAnswerValidation(userInputNumbers) {
    if (userInputNumbers.length !== 3) {
      return false;
    }
    if (new Set(userInputNumbers).size !== 3) {
      return false;
    }
    if (Number.isNaN(Number(userInputNumbers))) {
      return false;
    }
    if (userInputNumbers.includes(0)) {
      return false;
    }
    return true;
  }

  play(computerInputNumbers, userInputNumbers) {
    const balls = this.countBalls(computerInputNumbers,userInputNumbers);
    const strikes = this.countStrikes(computerInputNumbers,userInputNumbers);
    let resultText;
    if (balls === 0 && strikes === 0) {
      resultText = '낫싱';
    } else if ( strikes === 3 ) {
      resultText = `<strong>🎉 정답을 맞추셨습니다! 🎉<strong>`
      this.isCorrect = true;
    } else if (balls === 0){
      resultText = `${strikes}스트라이크`;
    } else if (strikes === 0) {
      resultText = `${balls}볼`;
    } else {
      resultText = `${balls}볼 ${strikes}스트라이크`;
    }
    return resultText;
  }

  countBalls(computerInputNumbers, userInputNumbers) {
    let totalBallCount = 0;
    totalBallCount = computerInputNumbers.reduce((count, value, index) => {
      const userInputNumber = Number(userInputNumbers[index]);
      if (
        userInputNumber !== value 
        && userInputNumbers.includes(value)
      ) {
        return count + 1;
      } else {
          return count;
      }
    }, 0);
    return totalBallCount;
  }

  countStrikes(computerInputNumbers, userInputNumbers) {
    let totalStrikeCount = 0;
    totalStrikeCount = computerInputNumbers.reduce((count, value, index) => {
        const userInputNumber = Number(userInputNumbers[index]);
        if (userInputNumber === value) {
            return count + 1;
        } else {
            return count;
        }
    }, 0);
    return totalStrikeCount;
  }

  showResultMessage(resultText) {
    this.result.innerHTML = resultText;
    if (this.isCorrect) {
      this.isCorrect = false;
      this.showRestartButton();
      this.restartButtonPressed();
    }
  }
  
  showRestartButton() {
    const appDiv = document.getElementById('app');
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id','new-div');
    newDiv.innerHTML = `
      </br> 게임을 새로 시작하시겠습니까?
      <button id="game-restart-button">게임 재시작</button>
    `;
    appDiv.appendChild(newDiv);
  }

  restartButtonPressed() {
    const restartButton = document.getElementById('game-restart-button');
    const newDiv = document.getElementById('new-div');
    restartButton.addEventListener('click', (e) => {
      this.result.innerHTML = '';
      this.userInput.value = '';
      this.computerInputNumbers = this.randomGenerator();
      newDiv.remove();
    });
  }
}

new BaseballGame();
