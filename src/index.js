export default class BaseballGame {
  constructor() {
      this.submitButton = document.getElementById('submit');
      this.userInput = document.getElementById('user-input');
      this.computerInputNumbers = this.randomGenerator();
      this.checkButtonPressed();
      this.result = document.getElementById('result');
  }

  randomGenerator() {
    const answer = MissionUtils.Random.pickUniqueNumbersInRange(1,9,3);
    return answer;
  }

  checkButtonPressed() {
    this.submitButton.addEventListener('click', (e)=>{
      e.preventDefault();
      const userInputNumbers = this.userInput.value;
      const valid = this.checkAnswerValidation(userInputNumbers);
      if (valid) {
        this.play(this.computerInputNumbers,userInputNumbers);
      } else {
        alert('잘못된 값을 입력했습니다.');
      }
    });
  }

  checkAnswerValidation(computerInputNumbers) {
    if (computerInputNumbers.length !== 3) {
      return false;
    }
    if (new Set(computerInputNumbers).size !== 3) {
      return false;
    }
    if (Number.isNaN(Number(computerInputNumbers))) {
      return false;
    }
    if (computerInputNumbers.includes(0)) {
      return false;
    }
    return true;
  }

  play(computerInputNumbers, userInputNumbers){
    const balls = this.countBalls(computerInputNumbers,userInputNumbers);
    const strikes = this.countStrikes(computerInputNumbers,userInputNumbers);
    let resultText;
    if (balls === 0 && strikes === 0) {
      resultText = '낫싱';
    } else if ( strikes === 3 ) {
      resultText = `<strong>🎉 정답을 맞추셨습니다! 🎉</strong>`
    } else if ( balls === 0 ){
      resultText = `${strikes}스트라이크`;
    } else if ( strikes === 0) {
      resultText = `${balls}볼`;
    } else {
      resultText = `${balls}볼 ${strikes}스트라이크`;
    }
    this.result.innerHTML = resultText;
  }

  countBalls(computerInputNumbers, userInputNumbers){
    let totalBallCount = 0;
    totalBallCount = computerInputNumbers.reduce((count, value, index) => {
      const userInputNumber = Number(userInputNumbers[index]);
      if (
        userInputNumber!== value 
        && userInputNumbers.includes(value)
      ) {
        return count + 1;
      } else {
          return count;
      }
    }, 0);
    return totalBallCount;
  }

  countStrikes(computerInputNumbers, userInputNumbers){
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
}

new BaseballGame();