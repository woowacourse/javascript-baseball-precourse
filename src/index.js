import BaseballGame from './baseballGame.js'
const game = new BaseballGame();

function submitInput(){
  const userInput = document.getElementById("user-input");
  const inputValue = userInput.value;
  //이상한 입력은 아닌지 체크
  if(!game.isAlright(inputValue)){
    alert("중복없는 숫자 3개를 써주세요.");
    userInput.value = "";
    return;
  }
  
  
}

function init(){
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click",submitInput);
}

init();