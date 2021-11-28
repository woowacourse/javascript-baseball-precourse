export default class BaseballGame {
  constructor(){
      this.submitButton = document.getElementById('submit');
      this.userInput = document.getElementById('user-input');
  }

  randomGenerator(){
    const answer = MissionUtils.Random.pickUniqueNumbersInRange(1,9,3);
    return answer;
  }

  checkButtonPressed(){
    this.submitButton.addEventListener('click', (e)=>{
      e.preventDefault();
      const userAnswer = this.userInput.value;
      return userAnswer;
    });
  }
}

const b = new BaseballGame();
b.checkButtonPressed();