export default function BaseballGame() {

  const submitBtn = document.querySelector("#submit");
  const userInput = document.querySelector("#user-input");
  const result = document.querySelector("#result");
  const MAX_NUM = 9;
  const MIN_NUM = 1;
  const NUM_LENGTH = 3;
  let computerInputNumbers = [];

  this.generateRandomNum = function () {
    let selectedNum = new Array();

    while (!(selectedNum.length === NUM_LENGTH)){
      let randomNum = Math.floor(Math.random() * (MAX_NUM + 1 - MIN_NUM) + MIN_NUM);
      if (!selectedNum.includes(randomNum.toString())){
        selectedNum.push(randomNum.toString());
      }
    }
    console.log(selectedNum);
    return selectedNum;
  }

  this.validateNum = function(userInputNumbers) {
    let isValid = true;
    userInputNumbers = Array.from(new Set(userInputNumbers));
    if (userInputNumbers.length !== NUM_LENGTH){
      isValid = false;
      return isValid
    }
    userInputNumbers.forEach( val => {
      if (parseInt(val) < MIN_NUM || parseInt(val) > MAX_NUM){
        isValid = false;
      }
    })
    return isValid;
  }

  this.play = function (computerInputNumbers, userInputNumbers) {
    let strike = 0;
    let ball = 0;

    computerInputNumbers.forEach( (item, idx) => {
      if (userInputNumbers.indexOf(item) === idx){
        strike++;
      }
      else if (userInputNumbers.indexOf(item) !== -1){
        ball++;
      }
    } )

    return [strike, ball];
  };

  this.getHint = function (strike, ball){
    let OUTPUT = ''

    if (strike === 0 && ball === 0){
      OUTPUT = '낫싱'
    }
    else if (strike === NUM_LENGTH){
      OUTPUT = '정답'
    }
    else if (ball && strike){
      OUTPUT += `${ball}볼 ${strike}스트라이크`;
    }
    else{
      ball ? OUTPUT += `${ball}볼` : OUTPUT += `${strike}스트라이크`;
    }

    return OUTPUT;
  }

  this.getResult = function(hint){
    if (hint === '정답'){
      result.innerHTML = `🎉 <strong>정답을 맞추셨습니다!</strong> 🎉<br><br>
      게임을 새로 시작하겠습니까? 
       <button id="game-restart-button">게임 재시작</button>`
      const restartBtn = document.querySelector("#game-restart-button");
      restartBtn.addEventListener("click", () => {
        this.init();
      });
    }
    else{
      result.innerHTML = hint;
    }
  }

  this.init = function() {
    result.innerHTML = '';
    userInput.value = '';
    computerInputNumbers = this.generateRandomNum();
  }

  submitBtn.addEventListener("click", () => {
    const userInputNumbers = userInput.value.split('');
    const isValid = this.validateNum(userInputNumbers);

    if(isValid){
      const hints = this.play(computerInputNumbers, userInputNumbers);
      const strike = hints[0];
      const ball = hints[1];
      const hint = this.getHint(strike, ball);
      this.getResult(hint);
    }
    else{
      alert('잘못된 입력입니다. 다시 입력해주세요.');
      userInput.value = '';
    }

  });

  this.init();
}

new BaseballGame();
