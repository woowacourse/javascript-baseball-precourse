export default function BaseballGame() {
  const submit = document.getElementById("submit");
  const userInput = document.getElementById("user-input");
  const resultWrapper = document.getElementById("result");
  const restartWrapper = document.getElementById("restart-wrapper");
  const restart = document.getElementById("restart");
  let inRound = false;

  this.play = function (computerInputNumbers, userInputNumbers) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < 3 ; i++) {
      if(computerInputNumbers[i] === userInputNumbers[i]) {
        strike++;
      } else if ( computerInputNumbers.includes(userInputNumbers[i]) ) {
        ball++;
      }
    }

    let result = this.judgeResult(strike, ball);

    return result;
  }; 

  this.judgeResult = function (strike, ball) {
    let result = "";

    if (strike === 3) return "정답";
    if (strike === 0 && ball === 0) return "낫싱";
    if (ball !== 0) result += `${ball}볼 `;
    if (strike !== 0) result += `${strike}스트라이크`

    return result;
  };

  this.getComputerInputNumbers = function () {
    let computerNumbers = [];

    while (computerNumbers.length < 3) {
      let randomNumber = getRandomNumber();

      if ( !computerNumbers.includes(randomNumber) ) {
        computerNumbers.push(randomNumber)
      }
    }
    
    return computerNumbers.join("");
  };

  this.checkInputError = function(userInputNumber) {

    if (userInputNumber.length !== 3) { 
      alert("3개의 숫자를 작성해주세요!");
      return ;
    } else if ( isDuplicationThreeDigits(userInputNumber) ){
      alert("중복된 숫자를 입력하셨습니다!");
      return ;
    } else if ( userInputNumber.includes(0) ){
      alert("1-9까지의 숫자만 입력해주세요!");
      return ;
    } else if ( isNaN( Number(userInputNumber) ) ){
      alert("숫자만 적어주세요!");
      return ;
    } 
    
    inRound = true;
  };

  this.setReadyForPlay = function() {
    let userInputNumber = userInput.value;

    userInput.value = "";
    this.checkInputError(userInputNumber);

    if (inRound) {
      this.startRoundFlow();
    }
    
  };

  this.startRoundFlow = function() {
      let result = this.play(computerInputNumbers, userInputNumber);
      this.handleResultHTML(result);
  };

  this.handleResultHTML = function(result) {

    if (result === "정답") {
      resultWrapper.innerHTML = `<strong>🎉 정답을 맞추셨습니다! 🎉</strong>`;
      restartWrapper.style.visibility = 'visible';
    } else {
      resultWrapper.innerHTML = `<p>${result}</p>`;
    }

    inRound = false;
  };
  
  this.handleRestart = function() {
    restartWrapper.style.visibility = 'hidden';
    userInput.value = "";
    resultWrapper.innerHTML = "";

    computerInputNumbers = this.getComputerInputNumbers();
    console.log(computerInputNumbers);
  };

  submit.addEventListener('click', () => this.getUserInput());
  restart.addEventListener('click', () => this.handleRestart());
  let computerInputNumbers = this.getComputerInputNumbers();
  console.log(computerInputNumbers);
}

function isDuplicationThreeDigits(numbers) {
  return (
    numbers[0] === numbers[1] ||
    numbers[0] === numbers[2] ||
    numbers[1] === numbers[2]
    );
}

function getRandomNumber() {
  return Math.floor(Math.random() * 9) + 1;
}

new BaseballGame()