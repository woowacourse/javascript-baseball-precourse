export default function BaseballGame() {

  const submitBtn = document.querySelector("#submit");
  const userInput = document.querySelector("#user-input");
  const result = document.querySelector("#result");
  let computerInputNumbers = [];

  this.randomNumGenerator = function () {
    const MAX_NUM = 9;
    const MIN_NUM = 1;
    let selectedNum = new Array();

    while (!(selectedNum.length === 3)){
      let randomNum = Math.floor(Math.random() * (MAX_NUM + 1 - MIN_NUM) + MIN_NUM);
      if (!selectedNum.includes(randomNum.toString())){
        selectedNum.push(randomNum.toString());
      }
    }
    return selectedNum;
  }

  this.validateNum = function(userInputNumbers) {
    let isValidNum = true;
    userInputNumbers = Array.from(new Set(userInputNumbers));
    if (userInputNumbers.length !== 3){
      isValidNum = false;
      return isValidNum
    }
    userInputNumbers.forEach( val => {
      if (parseInt(val) < 1 || parseInt(val) > 9){
        isValidNum = false;
      }
    })
    return isValidNum;
  }

  this.init = function() {
    result.innerHTML = '';
    userInput.value = '';
    computerInputNumbers = this.randomNumGenerator();
  }

  submitBtn.addEventListener("click", () => {
    const userInputNumbers = userInput.value.split('');
    const isValid = this.validateNum(userInputNumbers);

    if(isValid){

    }
    else{
      alert('잘못된 입력입니다. 다시 입력해주세요.');
      userInput.value = '';
    }

  });

  this.init();
}

new BaseballGame();
