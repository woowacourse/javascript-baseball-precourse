export default function BaseballGame() {
  const btnSubmit=document.querySelector('#submit');
  
  const userInput = document.querySelector("#user-input");
  const result = document.querySelector("#result");
  let computerInputNumbers=[];



  //컴퓨터에서 난수생성
  const generateComNumber=()=>{
    let newnumbers=[]
    
    while(newnumbers.length!=3){
      let newnum=MissionUtils.Random.pickNumberInRange(1, 9);
      if (!newnumbers.includes(newnum)){
        newnumbers.push(newnum);
       }

      }
  return newnumbers;
  }

  //유저가 입력한 수 가져오기
  const getUserNumber=()=>{
    let usernumber=userInput.value.split('').map(Number);
    return usernumber;
  }
//유저의 입력 유효성 판단
  const validateUser=()=>{
    let validatenum=getUserNumber();
    let valid=''
    let setvalid=new Set(validatenum);
    if(validatenum.length!=setvalid.size){
      valid='중복없이입력ㄱ'
    }
    validatenum.forEach(num=>{
      if(isNaN(num)){
        valid='숫자를 입력하세요'
      }

    }
    )
    if (validatenum.length>3){
      valid='범위에 알맞게 입력하세요'
    }
    
    return valid
  }

//strike ball 낫싱 판단
  const getHint=(computerInputNumbers, userInputNumbers)=>{
    let strikeCount=0;
    let ballCount=0;
    userInputNumbers.forEach((num,index)=>{
      
      if(num==computerInputNumbers[index]){
        strikeCount++;
      }
      else if(computerInputNumbers.includes(num)){
        ballCount++;
      }
    }
    )
    console.log(strikeCount)
    return [strikeCount,ballCount];
  }
//결과 화면에 출력
const getResult=(answer)=>{
  if(answer=="정답"){
    result.innerHTML='<strong>정답입니다</strong>게임을 새로 시작하시겠습니까?<button id="game-restart-button">게임 재시작</button>'
    //재시작버튼
    const btnRestart=document.querySelector('#game-restart-button');
    btnRestart.addEventListener("click",()=>{
    resetValue();
  })
  }
  else{
    result.innerHTML=answer
  }

}

  const play = function (computerInputNumbers, userInputNumbers) {
    
    let [strike,ball]=getHint(computerInputNumbers,userInputNumbers);
    let answer="";
    if (ball>0){
      answer+=`${ball}볼`
    }
    if (strike>0){
      answer+=`${strike}스트라이크`
    }  
    if (ball === 0 && strike === 0) {
      answer= "낫싱";
    }
    if (strike==3){
      answer="정답"
    }
    
    console.log(strike)
    return answer;
    };
  
  btnSubmit.addEventListener("click",()=>{
      let usernumber=getUserNumber();
      let valid=validateUser();
      if (valid==''){
        console.log(usernumber);
        console.log(computerInputNumbers);
        console.log(validateUser());
        console.log(play(computerInputNumbers,usernumber))
        getResult(play(computerInputNumbers,usernumber))
      }else{
        alert(valid)
      }
      
    })


  const init=()=>{
    resetValue();
    console.log(computerInputNumbers);
    
  }  
  const resetValue=()=>{
    result.innerHTML='';
    userInput.value='';
    computerInputNumbers=generateComNumber();
  }
  
  init();
}

BaseballGame();