export default class BaseballGame {
  constructor() {
      this.submitButton = document.getElementById('submit');
      this.userInput = document.getElementById('user-input');
      this.answer = this.randomGenerator();
      this.checkButtonPressed();
  }

  randomGenerator() {
    const answer = MissionUtils.Random.pickUniqueNumbersInRange(1,9,3);
    return answer;
  }

  checkButtonPressed() {
    this.submitButton.addEventListener('click', (e)=>{
      e.preventDefault();
      const userAnswer = this.userInput.value;
      const valid = this.checkAnswerValidation(userAnswer);
      if (valid) {
        return userAnswer;
      } else {
        alert('잘못된 값을 입력했습니다.');
      }
    });
  }

  checkAnswerValidation(userAnswer) {
    if (userAnswer.length != 3) {
      return false;
    }
    if (new Set(userAnswer).size != 3){
      return false;
    }
    if (Number.isNaN(Number(userAnswer))) {
      return false;
    }
    if (userAnswer.includes(0)) {
      return false;
    }
    return true;
  }
}

const b = new BaseballGame();