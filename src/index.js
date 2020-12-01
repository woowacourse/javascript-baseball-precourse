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

  this.init = function() {
    result.innerHTML = '';
    userInput.value = '';
    computerInputNumbers = this.randomNumGenerator();
  }

  this.init();
}

new BaseballGame();
