export default function BaseballGame() {
  const submit = document.getElementById("submit");
  const userInput = document.getElementById("user-input");
  const resultWrapper = document.getElementById("result");
  
  this.play = function (computerInputNumbers, userInputNumbers) {
    let ball = 0;
    let strike = 0;

    for( let i=0 ; i < 3 ; i++ ) {
      if(computerInputNumbers[i] === userInputNumbers[i]) {
        strike++;
      } else if (computerInputNumbers.includes(userInputNumbers[i])) {
        ball++;
      }
    }
    
    let result = this.judgeResult(strike, ball);
    
    return result;
  }; 

  this.judgeResult = function (strike, ball) {
    let result = "";

    if(strike === 3) return "정답";
    if(strike === 0 && ball === 0) return "낫싱";
    if(ball !== 0) result += `${ball}볼 `;
    if(strike !== 0) result += `${strike}스트라이크`

    return result;
  }

  this.getComputerInputNumbers = function () {
    let computerNumbers = [];
    while (computerNumbers.length < 3) {
      let randomNumber = getRandomNumber();

      if( !computerNumbers.includes(randomNumber) ) {
        computerNumbers.push(randomNumber)
      }
    }

    return computerNumbers.join("");
  };

  this.checkInputError = function(userInputNumber) {
    if(userInputNumber.length != 3) { 
      alert("3개의 숫자를 작성해주세요!");
      return ;
    } else if( isDuplication(userInputNumber) ){
      alert("중복된 숫자를 입력하셨습니다!");
      return ;
    } else if( userInputNumber.includes(0) ){
      alert("1-9까지의 숫자만 입력해주세요!");
      return ;
    } else if( isNaN( Number(userInputNumber) ) ){
      alert("숫자만 적어주세요!");
      return ;
    } else if(userInputNumber === "") {
      alert("입력해주세요!");
      return ;
    }
  };

  this.getUserInput = function() {
    let userInputNumber = userInput.value;

    this.checkInputError(userInputNumber);
    this.play(computerInputNumbers, userInputNumber);
  };

  submit.addEventListener('click',() => this.getUserInput());
  const computerInputNumbers = this.getComputerInputNumbers();
  console.log(computerInputNumbers);
}

function isDuplication(numbers) {
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