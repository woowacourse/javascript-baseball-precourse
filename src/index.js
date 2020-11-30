import { BASEBALL_GUIDE as BASEBALL } from './constants.js'
import { isDuplicationThreeDigits, getRandomNumber } from './util.js'

export default function BaseballGame() {
  const submit = document.getElementById("submit");
  const userInput = document.getElementById("user-input");
  const resultWrapper = document.getElementById("result");
  const restartWrapper = document.getElementById("restart-wrapper");
  const restart = document.getElementById("restart");
  const BASEBALL_COUNT = 3;
  const RANDOM_NUM_FROM = 1;
  const RANDOM_NUM_TO = 9;
  let inRound = false;

  this.play = (computerInputNumbers, userInputNumbers) => {
    let ball = 0;
    let strike = 0;

    for ( let i = 0; i < BASEBALL_COUNT; i++ ) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strike++;
      } else if ( computerInputNumbers.includes(userInputNumbers[i]) ) {
        ball++;
      }
    }

    let result = this.judgeResult(strike, ball);

    return result;
  }; 

  this.judgeResult = (strike, ball) => {
    let result = "";

    if (strike === BASEBALL_COUNT) return BASEBALL.ANSWER;
    if (strike === 0 && ball === 0) return BASEBALL.NOTHING;
    if (ball !== 0) result += `${ball}${BASEBALL.BALL} `;
    if (strike !== 0) result += `${strike}${BASEBALL.STRIKE}`

    return result;
  };

  this.getComputerInputNumbers = () => {
    let computerNumbers = [];

    while (computerNumbers.length < BASEBALL_COUNT) {
      let randomNumber = getRandomNumber(RANDOM_NUM_FROM,RANDOM_NUM_TO);

      if ( !computerNumbers.includes(randomNumber) ) {
        computerNumbers.push(randomNumber)
      }
    }
    
    return computerNumbers.join("");
  };

  this.checkInputError = (userInputNumber) => {

    if (userInputNumber.length !== 3) { 
      alert(BASEBALL.INPUT_THREE_NUMBERS);
      return ;
    } else if ( isDuplicationThreeDigits(userInputNumber) ){
      alert(BASEBALL.IS_DUPLICATION);
      return ;
    } else if ( userInputNumber.includes(0) ){
      alert(BASEBALL.ONE_TO_NINE);
      return ;
    } else if ( isNaN( Number(userInputNumber) ) ){
      alert(BASEBALL.ONLY_NUMBERS);
      return ;
    } 
    
    inRound = true;
  };

  this.setReadyForPlay = () => {
    let userInputNumber = userInput.value;

    userInput.value = "";
    this.checkInputError(userInputNumber);

    if (inRound) {
      this.startRoundFlow(userInputNumber);
    }

  };

  this.startRoundFlow = (userInputNumber) => {
      let result = this.play(computerInputNumbers, userInputNumber);
      this.handleResultHTML(result);
  };

  this.handleResultHTML = (result) => {

    if (result === "정답") {
      resultWrapper.innerHTML = `<strong>${BASEBALL.IS_ANSWER}</strong>`;
      restartWrapper.style.visibility = 'visible';
    } else {
      resultWrapper.innerHTML = `<p>${result}</p>`;
    }

    inRound = false;
  };
  
  this.handleRestart = () => {
    restartWrapper.style.visibility = 'hidden';
    userInput.value = "";
    resultWrapper.innerHTML = "";

    computerInputNumbers = this.getComputerInputNumbers();
    console.log(computerInputNumbers);
  };
  
  submit.addEventListener('click', this.setReadyForPlay);
  restart.addEventListener('click', this.handleRestart);
  let computerInputNumbers = this.getComputerInputNumbers();
  console.log(computerInputNumbers);
}

new BaseballGame()