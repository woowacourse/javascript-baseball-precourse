import BaseballGame from './baseballGame.js'
const game = new BaseballGame();

function submitInput(){
  const userInput = document.getElementById("user-input");
  const resultTxt = document.getElementById("result");
  const inputValue = userInput.value;
  //이상한 입력은 아닌지 체크
  if(!game.isAlright(inputValue)){
    alert("중복없는 숫자 3개를 써주세요.");
    userInput.value = "";
    return;
  }
  resultTxt.innerHTML = `
  <div> 
  ${game.play(game.computerNum,inputValue)} 
  </div>
  ` 
}

function init(){
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click",submitInput);
}

init();