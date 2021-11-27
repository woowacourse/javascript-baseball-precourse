import generateComNumber from './computer.js';
import validateUser from './validate.js';
import getHint from './hint.js';
export default function BaseballGame() {
  const btnSubmit=document.querySelector('#submit');
  const userInput = document.querySelector("#user-input");
  const result = document.querySelector("#result");
  const getAnswer='<strong>🎉정답을 맞추셨습니다!🎉</strong><br>게임을 새로 시작하시겠습니까? <button id="game-restart-button">게임 재시작</button>';
  let computerInputNumbers=[];

  //유저가 입력한 수 가져오기
  const getUserNumber=()=>{
    let usernumber=userInput.value.split('').map(Number);
    return usernumber;
  }
  
  //결과 화면에 출력
  const getResult=(answer)=>{
    if(answer=="정답"){
      result.innerHTML=getAnswer;
      //재시작버튼
      const btnRestart=document.querySelector('#game-restart-button');
      btnRestart.addEventListener("click",()=>{
      resetValue();
     })
   }
  else{
    result.innerHTML=answer;
  }

}

  const play = function (computerInputNumbers, userInputNumbers) {
    let [strike,ball]=getHint(computerInputNumbers,userInputNumbers);
    let answer="";
    if (ball>0){answer+=`${ball}볼 `};
    if (strike>0){answer+=`${strike}스트라이크`};  
    if (ball === 0 && strike === 0) {answer= "낫싱"};
    if (strike==3){answer="정답"};
    return answer;
    };
  
  btnSubmit.addEventListener("click",()=>{
      let userNumber=getUserNumber();
      let valid=validateUser(userNumber);
      if (valid==''){
        getResult(play(computerInputNumbers,userNumber));
      }else{
        alert(valid);
      }
      
    })
  
  const resetValue=()=>{
    result.innerHTML='';
    userInput.value='';
    computerInputNumbers=generateComNumber();
    console.log(`Guess ${computerInputNumbers}!`);
  }
  
  resetValue();
}
new BaseballGame();