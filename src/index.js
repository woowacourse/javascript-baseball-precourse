import BaseballGame from './baseballGame.js'
const game = new BaseballGame();
const userInput = document.getElementById("user-input");
const resultDiv = document.getElementById("result");

function initGame(){
  alert("게임을 다시 시작합니다.");
  resultDiv.innerHTML = "";
  userInput.value = "";
  game.initComputerNum();
}

function makeAnswerMsg(){
  resultDiv.innerHTML = `
  <p>🎉정답을 맞추셨습니다!🎉</p>
  <p>게임을 새로 시작하시겠습니까? <button id="game-restart-button">게임 재시작</button></p> 
  `;
  const resetButton = document.getElementById("game-restart-button");
  resetButton.addEventListener("click",initGame);
}

// 사용자가 예상한 번호로 게임을 진행하고 그에 맞게 메세지를 출력함
function processGame(){

  const inputValue = userInput.value;
  let resultTxt = "";

  //이상한 입력은 아닌지 체크
  if(!game.isAlright(inputValue)){
    alert("중복없는 숫자 3개를 써주세요.");
    userInput.value = "";
    return;
  }

  //게임 진행
  resultTxt = game.play(game.computerNum,inputValue);

  // 게임 결과 메세지 출력
  if(resultTxt === "정답"){
    makeAnswerMsg();
  }else{
    resultDiv.innerHTML = `<p> ${resultTxt} </p>`; 
  }
}

function init(){
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click",processGame);
}

init();